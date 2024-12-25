import React from 'react'

import Image from "next/image";

// All The images 
import htmllogo from "@/app/images/html.jpg";
import css from "@/app/images/css.jpg"
import js from "@/app/images/js logo.png";
import ts from "@/app/images/ts.jpg";
import reactjs from "@/app/images/reactjs.jpg";
import nextjs from "@/app/images/nextjs.jpg";


const Skills = () => {
  return (
    <section className='skills'>
      <h2 className='section-title'>My Skills</h2>
        
        <div className="skills-grid">
            <div className="skill-item">

               <Image src={htmllogo}alt='skill' width={100} height={100}/> 
                <h2>HTML</h2>
                <p>100%</p>
            </div>

            <div className="skill-item">
                <Image src={css} alt='skill' width={100} height={100}/>
                <h2>CSS</h2>
                <p>100%</p>
            </div>

            <div className="skill-item">
                <Image src={js} alt='skill' width={100} height={100}/>
                <h2>JavaScript</h2>
                <p>85%</p>
            </div>

            <div className="skill-item">
                <Image src={ts} alt='skill' width={100} height={100}/>
                <h2>TypeScript</h2>
                <p>90%</p>
            </div>

            <div className="skill-item">
                <Image src={reactjs} alt='skill' width={100} height={100}/>
                <h2>React.Js</h2>
                <p>75%</p>
            </div>

            <div className="skill-item">
                <Image src={nextjs} alt='skill' width={100} height={100}/>
                <h2>Next.Js</h2>
                <p>80%</p>
            </div>
        </div>
    </section>
  )
}

export default Skills