"use client";
import Link from "next/link";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import styles from "./Nav.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
      <span>Portfolio.</span>
       
      
      </Link>

      <ul className={`${styles.navlinks} ${isOpen ? styles.showMenu : ""}`}>
       
        
        <li>
          <Link className={styles.Link} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.Link} href="/skills">
            Skills
          </Link>
        </li>

        <li>
          <Link className={styles.Link} href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.Link} href="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <HiBars3 className={styles.menuicon} onClick={toggleMenu}/>

      <button className={styles.visitbtn}>
        <Link
          className={styles.gitLink}
          href={"https://www.linkedin.com/in/areeba-awan%F0%9F%A7%95%F0%9F%8F%BB-5269942b5/"}
          target="_blank"
        >
           HIRE ME 
        </Link>
      </button>
    </header>
  );
};

export default Navbar;