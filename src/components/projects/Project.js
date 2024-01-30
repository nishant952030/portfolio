import React from 'react'
import Gensculpt from "./projectImages/gensculpt-removebg-preview.png"
import "./project.css"
const Project = () => {
    const projects = [{
        projectId: 1,
        projectTitle: "Gensculpt",
        projectImage: Gensculpt,
        projectUrl: "https://ai-saas-blush.vercel.app/",
        projectDescription: "Gensculpt is stop solution for the generative AI. It is loaded with the features such as chatbot, code genration, image generation etc. API's like openAI and replicate are used to make it happen. It is fully responsive with cross-plateform support",
        usedFrameWork: "Next.js,Tailwind,Prisma,Clerk"
    },
    {
        projectId: 2,
        projectTitle: "Task Flow",
        projectImage: Gensculpt,
        projectUrl: "https://firebase-task-manager-seven.vercel.app/",
        projectDescription: "Task Flow is a modern tool to organize your today and even your upcoming days. The best thing about Task Flow is that it is connected to firebase which makes it accessible from any device,from anywhere, anytime.Reactjs is the major technology used.",
        usedFrameWork: "React.js, Firebase for authentication and databse"
    }, {
        projectId: 3,
        projectTitle: "Legendere",
        projectImage: Gensculpt,
        projectUrl:"https://dribbble.com/shots/23142082-FORTUNER-LEGENDER?utm_source=Clipboard_Shot&utm_campaign=nishant9520&utm_content=FORTUNER%20LEGENDER&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nishant9520&utm_content=FORTUNER%20LEGENDER&utm_medium=Social_Share",
        projectDescription: "This is a design for a product advertisement. Here the product is Toyota Fortuner. MAde usinsg the figma, and the black and white theme shows the classicness of the car. Design is modern and has modern design ideas",
        usedFrameWork: "Figma ,canva, Photoshop"
    }]
    return (
        <div className="pt-72 lg:px-12 xl:px-40 2xl:px-80 sm:px-12" id='work'>
            <div>
                <div className='text-center font text-7xl text-[#9EC8B9] 
                  work'>Work</div>
                <div className=' w-full bg-gradient-to-r from-transparent 
                 via-[#9EC8B9] to-transparent h-1 opacity-30'></div>
                {projects.map((project) => (
                    <>
                        <div key={project.projectId} className='w-full flex-reverse-col sm:flex pt-8 px-12'>
                            <div className='w-1/2 mx-auto'>
                                <a href={project.projectUrl}>
                                    <img src={project.projectImage} className='radial-grad'></img>
                                </a>
                                <div className='gradient'></div>
                            </div>
                            <div className=' sm:pl-10 work-info'>
                                <div className='text-4xl text-[#9ec8b9] pt-5 '>{project.projectTitle}</div>
                                <div className='text-[#9ec8b9] opacity-40 text-xl pt-3 bg-[#9ec8b92a] rounded-lg px-2 ml-2 pb-3'>{project.projectDescription}</div>
                                <div className='text-[#9ec8b9] pt-3'>{project.usedFrameWork}</div>
                            </div>
                        </div>
                        <div className=' w-full bg-gradient-to-r from-transparent 
                 via-[#9EC8B9] to-transparent h-1 opacity-30 mt-5 sm:mt-0 '></div>
                    </>
                ))}
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
                <div className='rectancle1'></div>
            </div>
        </div>
    )
}

export default Project