import { works } from '@/constants'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Projects() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center w-full min-h-[100dvh] pb-[2rem] px-[0.5rem] sm:px-[1rem] ">
            <section className="w-full py-[2rem] lg:py-[6rem] flex flex-col items-center">
                <div className="flex flex-col items-center gap-1 mb-2">
                    <b className="text-[40px]">My Works</b>
                    <hr className="w-3/5 border-2 border-primary" />
                </div>
                <p className="text-[20px] sm:text-[30px] md:text-[40px] font-[200] lg:w-[1000px] text-center leading-[30px] sm:leading-[40px] md:leading-[50px]">Explore a selection of my recent projects showcasing my design approach and problem solving skills.</p>
            </section>
            <section className="w-fit grid sm:grid-cols-2 gap-4 md:gap-8">
                {
                    works.map((work, idx)=>{
                        return <div className="w-full min-[1261px]:w-[568px] min-[1261px]:h-[434px] overflow-hidden group relative flex items-center justify-center" key={idx}>
                            <div onClick={()=>navigate(`/projects/${work.id}`)} className="p-3 absolute rounded-lg group-hover:flex flex sm:hidden scale-75 group-hover:scale-100 transition-all duration-500 items-end sm:bg-white bg-gradient-to-br from-primary to-green-600 text-white group hover:bg-primary min-w-[180px] min-h-[70px] cursor-pointer sm:text-gray-600 hover:text-white z-10">
                                <div className="size-5 rounded-full bg-gray-700 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center absolute top-3 right-3">
                                    <ArrowRight className='size-4 -rotate-45'/>
                                </div>
                                <h1>{work.title}</h1>
                            </div>
                            <img src={work.image} alt="projectPreview" className="size-full object-contain group-hover:scale-110 transition-all duration-300" />
                        </div>
                    })
                }
            </section>
        </div>
    )
}

export default Projects