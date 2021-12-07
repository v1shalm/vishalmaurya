import React, { useState } from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import Image from 'next/image';
import  profile from '../public/profile.webp'
import Projects from "./Projects";


const About = () => {
        const [show, setShow] = useState(true)
    return (
       <div className="container px-4 mx-auto  ">
            <div className="lg:space-x-5   lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-8 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl  dark:text-white">
                            Hi there,  I am Vishal.
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                         <RoughNotationGroup>
                       <p className="mb-4">
                          I am  a
                          <RoughNotation type="highlight" color={"#FDE68A"}  padding= '[2, 10]' show={show}> <span className="dark:text-gray-700">Frontend Developer</span> </RoughNotation>
                            based in<RoughNotation type="highlight" color={"#A7F3D0"}    show={show}> <span className="dark:text-black">India</span> </RoughNotation>with a passion for building digital services/stuff .
                          I have a knack for  launching products, from planning and designing till  all the way to solving real-life problems with code.
                          <br/>
                          When not online, I love to <RoughNotation type="highlight" color={"#BAE6FD"}    show={show}> <span className="dark:text-black">play Valorant</span> </RoughNotation> mostly .
                          <br/>
                           Currently, <RoughNotation type="highlight" color={"#C7D2FE"}    show={show}> <span className="dark:text-black">looking for roles</span> </RoughNotation>to develop as well as  to grow
                        </p>
                         </RoughNotationGroup>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                       placeholder="blur"
                    />
                </div>
            </div>
            <Projects />

        </div>
    )
}

export default About;