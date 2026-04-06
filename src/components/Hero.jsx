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
          Mobile Application Developer & Solution Consultant
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.description}
        >
          Results-oriented Full Stack Mobile Application Developer with 4+ years of experience building high-performance applications across Flutter, Android, iOS, and React Native. Experienced as a Solution Consultant, delivering complete end-to-end development solutions including backend systems, cloud integration, and AI-powered features. Proficient in advanced state management, real-time communication, and scalable architecture, with a strong focus on Clean Architecture, performance optimization, and enterprise-grade solutions.
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
          <a href="https://medium.com/@siyadas878" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 1044 593" fill="currentColor"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" /></svg>
          </a>
          <a href="mailto:siyadas878@gmail.com"><Mail size={24} /></a>
        </motion.div>
      </div>
    </section>
  );
}
