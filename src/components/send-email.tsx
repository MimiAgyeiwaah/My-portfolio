"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser"; // for EmailJS
import { toast } from "sonner";
// OR import { Resend } from "resend"; // if using Resend backend

export default function SendMessageDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- EmailJS handler ---
  const handleSend = async () => {
    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button className="px-4 cursor-pointer">Send a Message</Button> */}
        {children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md flex flex-col items-center space-y-4">
        <DialogHeader className="text-center gap-0">
          <DialogTitle className="text-center">Send a Message</DialogTitle>
          <DialogDescription className="mt-2 text-center mx-auto sm:max-w-[90%]">
            Fill out the form below to send me a message.
          </DialogDescription>
        </DialogHeader>

        <div className="w-full space-y-3">
          <div className="space-y-3">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="James Zokah"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jammi@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <DialogFooter className="w-full">
          <Button
            disabled={
              isSending || !formData.name || !formData.email || !formData.message
            }
            onClick={handleSend}
            className="w-full text-white bg-primary hover:bg-primary/90"
          >
            {isSending ? (
              <Loader2 className="animate-spin text-white" />
            ) : (
              "Send"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
