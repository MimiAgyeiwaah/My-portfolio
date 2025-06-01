import { log } from 'console'
import { works } from '../constants'
import { useParams } from 'react-router-dom'

function ProjectDetail() {
    const {id} = useParams()
    const project = works.find((work:any) => `${work.id}` === id) 
    console.log(project?.image, 'img');
    
    return (
        <div className='w-full h-[calc(100dvh-100px)] flex flex-col px-[0.5rem] sm:px-[1rem] md:px-[5rem] xl:px-[10rem] bg-white'>
            <section className="w-full h-full flex min-[1001px]:flex-row flex-col gap-[2rem] min-[1714px]:gap-[4rem] items-start px-[1rem] min-[1001px]:pt-[4rem] min-[1714px]:px-[10rem]">
                <div className="min-w-full min-[1001px]:min-w-[400px] min-[1714px]:min-w-[500px] min-[700px]:gap-[2rem] min-[1001px]:min-h-[400px] flex flex-col items-start justify-between">
                    <p className='h-6 text-xs flex items-center px-3 bg-primary rounded-lg text-white min-[400px]:hidden '>{project?.role}</p>
                    <h1 className="text-[2rem] sm:text-[3rem] lg:text-[4rem] leading-[4.5rem] font-bold min-[1001px]:w-[250px] min-[1200px]:w-[330px]">{project?.title}</h1>
                    <div className="w-full gap-3 flex min-[400px]:flex-row flex-col items-start  justify-between sm:text-base text-sm">
                        <div className="flex flex-col items-start gap-1 min-[700px]:gap-2">
                            <p className="text-gray-500 font-200 mb-2 max-[400px]:hidden">SERVICES</p>
                            {
                                project?.service.map((service, idx) => (
                                    <p className='text-' key={idx}>{service}</p>
                                ))
                            }
                        </div>
                        <div className="hidden min-[400px]:flex flex-col items-start gap-1 sm:gap-2 w-[200px]">
                            <p className="text-gray-500 font-200 mb-2">ROLE</p>
                            <p>{project?.role}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 overflow-y-auto h-full flex flex-col items-start gap-4">
                    <img src={project?.image} alt={project?.title} className="w-full rounded-3xl h-[475px] object-cover mb-[2rem]" />

                    {
                        project?.description.map((desc, idx) => {
                            console.log(desc.subContent, 'desc.sub');
                            
                            return ((
                                <div className="w-full flex flex-col items-start gap-4" key={idx}>
                                    <div className="flex flex-col items-start gap-1">
                                        <h1 className="text-[24px] font-">{desc?.subTitle}</h1>
                                        {desc?.subTitle && <hr className="w-3/5 border-2 border-primary" />}
                                        
                                    </div>
                                    <p className="text-gray-800 font-200 text-[18px]">{desc.content}</p>
                                    <section className="w-full flex flex-col gap-[0.5rem]">
                                        {
                                             desc?.subContent?.map((subContent, idx) => {
                                                
                                                return ((
                                                    <div key={`subcontent-${idx}`} className="w-full flex flex-col gap-[0.5rem]">
                                                        <aside className="flex flex-col gap-[0.5rem]">
                                                        {subContent.title && (
                                                            <div className="flex items-center gap-2">
                                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="8.39844" y="0.515137" width="12" height="12" transform="rotate(44.4186 8.39844 0.515137)" fill="#212121"/>
                                                            </svg>
                                                            <p className="">{subContent.title}</p>
                                                        </div>
                                                        )}
                                                            
                                                            <p className="text-gray-700 font-200">{subContent.content}</p>
                                                        </aside>
                                                        
                                                        {subContent?.image && <img src={subContent?.image} alt="subcontent" className="w-full h-[600px] object-cover" />}
                                                        <p className="text-gray-700 font-200">{subContent.content2}</p>
                                                        
                                                    </div>
                                                ))
                                             }) 
                                        }
                                    </section>
                                    <div className="w-full flex flex-col gap-[2rem]">
                                        {
                                            desc?.images?.map((image, idx) => ((
                                                <img src={image} alt="otherimages" className="w-full h-[600px] object-cover" key={`image-${idx}`} />   
                                            )))
                                        }
                                    </div>
                                </div>
                            ))
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default ProjectDetail