import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// images section
import CV from "@/app/images/pic.2.jpeg";
import flowers from "@/app/images/flowers.png";
import editable from "@/app/images/pic.3.jpeg";
import resume from "@/app/images/pic.1.jpeg"
import Portfolio from "@/app/images/portfolio.png";
import Comforty from "@/app/images/comforty.png";
import AdventureGame from "@/app/images/adventureGame.jpg";
import AtmMachine from "@/app/images/Atm Machines.jpg";
import Calculator from "@/app/images/calculator.jpg";


const Projects = () => {
  return (
    <section className="projects">
      <h2 className='section-title' style={
        {color:"white"}
      }>My Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <Image src={Portfolio} alt='project image' height={1000} width={1000}/>
          <h3>Portfolio Website</h3>
          <p>I have created this personal portfolio web using Next Js and TailwindCss</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://personal-portfolio-using-tailwindcss.vercel.app/"} target='_blank' style={{color:"white"}}>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/areeba-awan/Nextjs-milestone2-Personal-Portfolio.git"} style={{color:"white"}} target='_blank'>Github Link</Link></div>
          </div>
        </div>

        <div className="project-card">
          <Image src={flowers} alt='project image' height={1000} width={1000}/>
          <h3>Fresh Flowers Website</h3>
          <p>Created an amazing Fresh Flowers Website using Html And Css.</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://responsive-flowers-website-html-css.vercel.app/"} target='_blank' style={{color:"white"}}>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/areeba-awan/Responsive-Flowers-Website-Html-Css.git"} target='_blank' style={{color:"white"}}>Github Link</Link></div>
          </div>
        </div>


        <div className="project-card">
          <Image src={editable} alt='project image' height={1000} width={1000}/>
          <h3>Editable Resume Builder</h3>
          <p>I have build an amazing Editable Resume Generator where u can edit your resume easily feel free to check the live demo.</p>
          <div className="btn-group">
            <div className="btn"> <Link className='Link' href={"https://milestone-4-coral-three.vercel.app/"} target='_blank' style={{color:"white"}}>live Demo</Link></div>

            <div className="btn" > <Link className='Link' href={"https://github.com/areeba-awan/Hackathon-Resume-Builder-GIAIC.git"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>

        
        <div className="project-card">
          <Image src={CV} alt='project image' height={1000} width={1000}/>
          <h3>Dynamic Resume Builder</h3>
          <p>I have build an amazing Dynamic Resume Generator feel free to check the live demo.</p>
          <div className="btn-group">
            <div className="btn"> <Link className='Link' href={"https://milestone-3-seven-azure.vercel.app/"} target='_blank' style={{color:"white"}}>live Demo</Link></div>

            <div className="btn" > <Link className='Link' href={"https://github.com/areeba-awan/Hackathon-Resume-Builder-GIAIC.git"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>

        <div className="project-card">
          <Image src={resume} alt='project image' height={1000} width={1000}/>
          <h3>Static Interactive Resume</h3>
          <p>I have build an amazing Static Interactive Resume feel free to check the live demo.</p>
          <div className="btn-group">
            <div className="btn"> <Link className='Link' href={"https://milestone-1-theta-liard.vercel.app/"} target='_blank' style={{color:"white"}}>live Demo</Link></div>

            <div className="btn" > <Link className='Link' href={"https://github.com/areeba-awan/Hackathon-Resume-Builder-GIAIC.git"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>

        
        <div className="project-card">
          <Image src={Comforty} alt='project image' height={1000} width={1000}/>
          <h3>Comforty Website</h3>
          <p>This is UI/UX Figma based Comforty Website where I have used my Expertise of Nextjs and Tailwind css .</p>
          <div className="btn-group">
            <div className="btn"> <Link className='Link' href={"https://hackathon-template-8-one.vercel.app/"} target='_blank' style={{color:"white"}}>live Demo</Link></div>
             <div className="btn" > <Link className='Link' href={"https://github.com/areeba-awan/Hackathon-template-8.git"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>

         
        <div className="project-card">
          <Image src={AdventureGame} alt='project image' height={1000} width={1000}/>
          <h3>Adventure Game</h3>
          <p>This is CLI based Adventure Game which is created with Typescript.</p>
          <div className="btn-group">
           
             <div className="btn" > <Link className='Link' href={"https://github.com/areeba-awan/Project-07-ADVENTURE-GAME.git"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>

        
        <div className="project-card">
          <Image src={AtmMachine} alt='project image' height={1000} width={1000}/>
          <h3>ATM Machine</h3>
          <p>This is CLI based ATM MAchine which is created with Typescript.</p>
          <div className="btn-group">
           
             <div className="btn" > <Link className='Link' href={"https://github.com/areeba-awan/Project-02-ATM-MACHINE.git"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>

        
        <div className="project-card">
          <Image src={Calculator} alt='project image' height={1000} width={1000}/>
          <h3>Calculator</h3>
          <p>This is CLI based Simple Calculator which is created with Typescript.</p>
          <div className="btn-group">
           
             <div className="btn" > <Link className='Link' href={"https://github.com/areeba-awan/Project-00-Simple-Calculator.git"} style={{color:"white"}} target='_blank'>Github Link</Link> </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects