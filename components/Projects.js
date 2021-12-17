import React from 'react'
import Image from "next/image"
import Blog from "../public/Blog.png"
import Convo from "../public/Convo.png"
import Searchify from "../public/Searchify.png"



const Projects = () => {
    return (
        <div className=" max-w-4xl mx-auto mt-16 antialiased ml-2 ">
            <h1 className="text-3xl font-bold ">Selected Work</h1>
            <p className="font-light">Few projects based on what I am  learning.</p>

            <div className="mt-20 ">
                <div className="mt-8 p-2 m-2 mb-6 ">
                <a href="https://conv0.netlify.app/"  target="_blank"  rel="noopener noreferrer">
                    <h1 className="text-2xl font-bold pb-2 hover:underline  flex items-center gap-2">CONVO
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg></h1>
                    <p className="font-light pb-2">A Chat app made with React JS , Firebase  with Social Authentication such as Google and Facebook.</p>

                        <div className="mt-8">

                        <Image
                         src={Convo}
                        alt="Convo - chat app"
                        className="rounded shadow-lg object-cover"
                         layout="responsive"
                         placeholder="blur"
                          />
                          </div>
                            </a>
                </div>
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>

                  <div className="mt-8 p-2  m-2 mb-6   ">
                       <a href="https://v1shalm-blog.vercel.app/"  target="_blank"  rel="noopener noreferrer">
                    <h1 className="text-xl font-bold pb-2  hover:underline flex items-center gap-2">BLOG APP
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    </h1>
                    <p className="font-light pb-2">A blog app made with Next Js, Tailwind CSS and GraphCMS</p>
                        <div className="mt-8">
                        <Image
                         src={Blog}
                        alt="Blog"
                        className="rounded shadow-lg object-cover"
                       layout="responsive"
                       placeholder="blur"
                          />
                          </div>
                          </a>
                        </div>


                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>

                <div className="mt-8 p-2 m-2 mb-6  ">
                    <a href="https://searchify-app.netlify.app/"  target="_blank"  rel="noopener noreferrer">
                    <h1 className="text-xl font-bold pb-2  hover:underline flex items-center gap-2">SEARCHIFY
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    </h1>
                    <p className="font-light pb-2">A Google Search Clone made with React JS, Tailwind CSS and Google Search API from Rapid API.
                    With the ability to search for up-to-date results, news, images, and videos, modern UI, dark mode, and completely responsive.
                    .</p>
                        <div className=" mt-8">
                        <Image
                            src={Searchify}
                            alt="Blog"
                            className="rounded shadow-xl object-cover"
                            layout="responsive"
                            placeholder="blur"
                          />
                          </div>
                          </a>
                </div>

                </div>
          </div>

    )
}

export default Projects
