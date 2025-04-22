import { profilePicture } from '@/assets'
import { hardSkills } from '@/constants'

function About() {
    return (
        <div className='w-full h-[calc(100dvh-100px)] flex flex-col px-[0.5rem] sm:px-[1rem] md:px-[5rem] xl:px-[10rem] bg-white'>
            <section className="w-full h-full flex min-[1001px]:flex-row flex-col gap-[2rem] min-[1714px]:gap-[4rem] items-start px-[1rem] min-[1001px]:pt-[4rem] min-[1714px]:px-[10rem]">
                <div className="min-w-full min-[1001px]:min-w-[400px] min-[1714px]:min-w-[500px] min-[700px]:gap-[2rem] min-[1001px]:min-h-[400px] flex flex-col items-start justify-between">
                    <ul className="flex sm:flex-col sm:w-auto w-[90dvw] overflow-x-auto gap-4 sm:gap-3 sm:text-black text-gray-500 text-nowrap">
                        <li>My Journey</li>
                        <li>Skills & Expertise</li>
                        <li>Tools & Software</li>
                        <li>Design Process</li>
                        <li>Services</li>
                        <li>Contact & Social media platforms</li>
                    </ul>
                </div>
                <div className="w-full flex-1 overflow-y-auto h-full flex flex-col items-start gap-4">
                    <section className="w-full flex min-[470px]:flex-row flex-col items-center gap-5">
                        <div className="w-full min-[400px]:w-[319px] h-[180px] rounded-3xl relative overflow-hidden flex items-center justify-center">
                            <img src={profilePicture} alt="" className="w-full object-contain absolute top-0 left-0 " />
                        </div>
                        <span className='text-[40px] font-[200] w-[200px] leading-[50px] min-[470px]:text-left text-center'>Miriam <span className='font-[600]'>Agyeiwaah Asante</span></span>
                    </section>
                    <p>My journey as a UI/UX & Graphic Designer started with a passion for creativity and problem-solving. Guided into the tech space, I embraced design, turning ideas into intuitive experiences.</p>
                    <p>My design ethos is based on the idea that each and every pixel counts. Every choice, from the placement of a button that directs a user's journey to the color selection that conjures a particular emotion, is deliberate. Design is not just what it looks like; it's about how it works.</p>
                    <p>My goal is to provide users with an experience they didn't realize they were craving. Come along with me as I transform everyday events into remarkable designs. Not only should we design, but also mold experiences, arouse feelings, and above all design dreams.</p>
                    
                    {/* Hard Skills .... */}
                    <br />
                    <div className="flex flex-col items-start gap-1">
                        <b className="text-[28px]">Hard Skills</b>
                        <hr className="w-3/5 border-2 border-primary" />
                    </div>
                    <section className="w-full flex items-center gap-4 flex-wrap">
                        {
                            hardSkills.map((skill, idx)=>(
                                <div key={idx} className="w-fit sm:text-base text-sm px-4 py-2 flex items-center justify-center rounded-[3rem] bg-white border border-primary-foreground">
                                    {skill}
                                </div>
                            ))
                        }
                    </section>

                    {/* Hard Skills .... */}
                    <br />
                    <div className="flex flex-col items-start gap-1">
                        <b className="text-[28px]">Soft Skills</b>
                        <hr className="w-3/5 border-2 border-primary" />
                    </div>
                    <section className="w-full flex items-center gap-4 flex-wrap">
                        {
                            hardSkills.slice(6).map((skill, idx)=>(
                                <div key={idx} className="w-fit sm:text-base text-sm px-4 py-2 flex items-center justify-center rounded-[3rem] bg-white border border-primary-foreground">
                                    {skill}
                                </div>
                            ))
                        }
                    </section>
                </div>
            </section>
        </div>
    )
}

export default About