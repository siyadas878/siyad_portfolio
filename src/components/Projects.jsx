"use client"
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "ByteFlow",
    description: "Architected a domain-agnostic Flutter Web & Mobile framework, reducing client development costs by 35% with modular architecture.",
    image: "/images/byteflow.png",
    tags: ["Flutter", "Dart", "WebSockets", "OAuth2"],
    link: "#",
    github: "#"
  },
  {
    title: "Course Connect",
    description: "Streamlined the study abroad process, from course discovery to applications with a unified frontend for web, Android, and iOS.",
    image: "/images/courseconnect.png",
    tags: ["Flutter", "Responsive UI", "Client App"],
    link: "#",
    github: "#"
  },
  {
    title: "MAOWL",
    description: "Home automation dashboard for controlling smart devices, monitoring sensor data and managing household routines.",
    image: "/images/maowl.png",
    tags: ["Flutter", "Supabase", "FastAPI", "Raspberry Pi"],
    link: "#",
    github: "#"
  },
  {
    title: "Bytes",
    description: "Food ordering app featuring real-time tracking and secure payments. Includes comprehensive restaurant management modules.",
    image: "/images/bytes.png",
    tags: ["Flutter", "Firebase", "Razorpay", "Real-time"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.title}>Major Projects</h2>
        <p className={styles.subtitle}>Some of my recent enterprise and open-source work</p>
      </motion.div>

      <div className={styles.grid}>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`glass-card ${styles.card}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlay}>
                <div className={styles.links}>
                  <a href={project.github} className={styles.iconBtn}><Github size={20} /></a>
                  <a href={project.link} className={styles.iconBtn}><ExternalLink size={20} /></a>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
