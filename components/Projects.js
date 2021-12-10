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
                    <h1 className="text-2xl font-bold pb-2 hover:underline ">CONVO</h1>
                    <p className="font-light pb-2">A Chat app made with React JS , Firebase  with Social Authentication such as Google and Facebook.</p>
                       </a>
                        <div className="mt-8">
                            <a href="https://conv0.netlify.app/"  target="_blank"  rel="noopener noreferrer">
                        <Image
                         src={Convo}
                        alt="Convo - chat app"
                        className="rounded shadow-lg object-cover"
                         layout="responsive"
                         placeholder="blur"
                          />
                          </a>
                          </div>
                </div>
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>

                  <div className="mt-8 p-2  m-2 mb-6   ">
                       <a href="https://v1shalm-blog.vercel.app/"  target="_blank"  rel="noopener noreferrer">
                    <h1 className="text-xl font-bold pb-2  hover:underline">BLOG APP</h1>
                    <p className="font-light pb-2">A blog app made with Next Js, Tailwind CSS and GraphCMS</p>
                        </a>
                        <div className="mt-8">
                    <a href="https://v1shalm-blog.vercel.app/"  target="_blank"  rel="noopener noreferrer">
                        <Image
                         src={Blog}
                        alt="Blog"
                        className="rounded shadow-lg object-cover"
                       layout="responsive"
                       placeholder="blur"
                          />
                          </a>
                          </div>
                        </div>


                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>

                <div className="mt-8 p-2 m-2 mb-6  ">
                    <a href="https://searchify-app.netlify.app/"  target="_blank"  rel="noopener noreferrer">
                    <h1 className="text-xl font-bold pb-2  hover:underline">SEARCHIFY</h1>
                    <p className="font-light pb-2">A Google Search Clone made with React JS, Tailwind CSS and Google Search API from Rapid API.
                    With the ability to search for up-to-date results, news, images, and videos, modern UI, dark mode, and completely responsive.
                    .</p>
                       </a>
                        <div className=" mt-8">
                            <a href="https://searchify-app.netlify.app/"  target="_blank"  rel="noopener noreferrer">
                        <Image
                            src={Searchify}
                            alt="Blog"
                            className="rounded shadow-lg object-cover"
                            layout="responsive"
                            placeholder="blur"
                          />
                          </a>
                          </div>
                </div>

                </div>
          </div>

    )
}

export default Projects
