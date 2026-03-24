"use client"
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.badge}
        >
          <span>Available for Hire</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.title}
        >
          Hi, I am <br />
          <span className={styles.gradientText}>Mohammed Siyadh A S</span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.subtitle}
        >
          Senior Flutter Developer
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.description}
        >
          Results-oriented Developer with 4+ years of experience architecting high-performance cross-platform applications. Specialized in building scalable frameworks, BLoC, WebSockets, and Generative AI integration.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.actions}
        >
          <a href="#projects" className={styles.primaryBtn}>
            View My Work <ArrowRight size={18} />
          </a>
          <a href="mailto:siyadas878@gmail.com" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className={styles.socials}
        >
          <a href="https://github.com/siyadas" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
          <a href="https://linkedin.com/in/mohammedsiyadh" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
          <a href="mailto:siyadas878@gmail.com"><Mail size={24} /></a>
        </motion.div>
      </div>
    </section>
  );
}
