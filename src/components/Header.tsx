import { logo } from '@/assets'
import React from 'react'
import { Menu, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <div className='w-full min-h-[80px] sticky top-0 z-20 flex items-center justify-between px-[0.5rem] sm:px-[1rem] md:px-[5rem] xl:px-[10rem]'>
            <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="logo" className="w-16 sm:w-20" />
            </Link>
            <aside className="flex items-center gap-3 relative">
                <div className={`absolute top-0 right-0 w-[283px] h-[330px] bg-primary z-10 text-white flex items-end transition-all duration-500 ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <Plus onClick={()=>setShowMenu(false)} className='absolute top-3 right-3 rotate-45 size-7 cursor-pointer transition-all duration-500 hover:-rotate-45'/>
                    <div className="flex flex-col items-start justify-center p-[2rem] gap-5">
                        <Link onClick={()=>setShowMenu(false)} to="/" className="hover:text-indigo-300 transition-all duration-300">Home</Link>
                        <Link onClick={()=>setShowMenu(false)} to="/about" className="hover:text-indigo-300 transition-all duration-300">About</Link>
                        <Link onClick={()=>setShowMenu(false)} to="/projects" className="hover:text-indigo-300 transition-all duration-300">Projects</Link>
                    </div>
                </div>

                <div onClick={()=>setShowMenu(true)} className={`size-[44px] flex items-center justify-center rounded-sm bg-[#8b5cf619] cursor-pointer`}>
                    <Menu className="size-5 text-primary" />
                </div>
            </aside>
            {/* {showMenu ? <div onClick={()=>setShowMenu(false)} className="fixed top-0 left-0 w-full h-full z-0"></div> : null} */}
        </div>
    )
}

export default Header