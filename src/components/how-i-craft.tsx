'use client';

import { useState } from 'react';
import { cn } from '../lib/utils';
import { Plus, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export interface HowICraftItem {
  question: string;
  answer: string;
}

function HowICraft({ howICraft }: { howICraft: HowICraftItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full md:py-6">
      <div className="p-8 pb-12 w-full">

        <div className="space-y-4 w-full">
          {howICraft.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between py-3 text-left cursor-pointer"
              >
                <span className="text-xl font-normal">{item.question}</span>
                <span
                  className={cn(
                    `ml-6 flex-shrink-0 rounded-full bg-white p-1`,
                    {
                      'bg-primary': openIndex === index,
                    },
                  )}
                >
                  {openIndex === index ? (
                    <X className="h-5 w-5 text-white" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-500" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-gray-600">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowICraft;