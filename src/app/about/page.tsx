import React from "react";
import Image from "next/image";
import {FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import image from "@/app/images/about.jpg"
const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <Image
          src={image}
          alt="Profile Pic"
          height={2000}
          width={2000}
        />

        <div className="info-box">
          <div className="text">
            <h3>Hi I'm</h3>
            <h1>Areeba Awan</h1>
            <span>FrontEnd Developer</span>
          </div>

          <div className="btn-group">
            <div className="btn">
              <Link style={{color:"white"}} className="aboutLink" href={"#"} target="_blank">
                Download CV
              </Link>
            </div>
            <div className="btn">
              {" "}
              <Link style={{color:"white"}} className="aboutLink" href={"/contact"}>
                Contact
              </Link>{" "}
            </div>
          </div>

          <div className="socials">
            <Link
              style={{ color: "white" }}
              href={"https://github.com/areeba-awan"}
              target="_blank"
            >
              <FaGithub className="i" />
            </Link>

            <Link
              style={{ color: "Skyblue" }}
              href={"https://www.linkedin.com/in/areeba-awan%F0%9F%A7%95%F0%9F%8F%BB-5269942b5/"}
              target="_blank"
            >
              <FaLinkedin className="i" />
            </Link>

            <Link
              style={{ color: "yellow" }}
              href={"https://awanareeba40@gmail.com"}
              target="_blank"
            >
              <FaEnvelope className="i" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;