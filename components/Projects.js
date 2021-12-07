import React from 'react'
import Image from "next/image"
import Blog from "../public/Blog.png"
import Convo from "../public/Convo.png"
import Searchify from "../public/Searchify.png"



const Projects = () => {
    return (
        <div className=" max-w-4xl mx-auto mt-16 antialiased ml-4 ">
            <h1 className="text-2xl font-bold ">Selected Work</h1>
            <p className="font-light">Few projects based on what I am  learning.</p>
            <div className="m-2">
                <div className="mt-8 p-2 m-2 mb-4">
                    <h1 className="text-xl font-bold pb-2 hover:underline ">CONVO</h1>
                    <p className="font-light pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatum et maxime porro placeat maiores.</p>
                        <div className="p-2">
                        <Image
                         src={Convo}
                        alt="Convo - chat app"
                        className="rounded shadow-lg object-cover"
                         layout="responsive"
                         placeholder="blur"
                          />
                          </div>
                </div>
                  <div className="mt-8 p-2 m-2 mb-4">
                    <h1 className="text-xl font-bold pb-2  hover:underline">BLOG APP</h1>
                    <p className="font-light pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatum et maxime porro placeat maiores.</p>
                        <div className="p-2">
                        <Image
                         src={Blog}
                        alt="Blog"
                        className="rounded shadow-lg object-cover"
                       layout="responsive"
                       placeholder="blur"
                          />
                          </div>

                     <div className="mt-8 p-2 m-2 mb-4">
                    <h1 className="text-xl font-bold pb-2  hover:underline">SEARCHIFY</h1>
                    <p className="font-light pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatum et maxime porro placeat maiores.</p>
                        <div className="p-2">
                        <Image
                            src={Searchify}
                            alt="Blog"
                            className="rounded shadow-lg object-cover"
                            layout="responsive"
                            placeholder="blur"
                          />
                          </div>
                </div>

                </div>
          </div>
          </div>
    )
}

export default Projects
