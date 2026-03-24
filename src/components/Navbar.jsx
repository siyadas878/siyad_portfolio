"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <motion.header 
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className={styles.logo}>
        <span className={styles.name}>Siyadh</span>
        <span className={styles.dot}>.</span>
      </div>
      <nav className={styles.links}>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#contact" className={styles.cta}>Hire Me</Link>
      </nav>
    </motion.header>
  );
}
