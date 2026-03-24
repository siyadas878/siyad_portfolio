"use client"
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import Image from "next/image";
import { ExternalLink, Github, Apple, Smartphone } from "lucide-react";

const projectsData = [
  {
    title: "ByteFlow",
    description: "Architected a domain-agnostic Flutter Web & Mobile framework, reducing client development costs by 35% with modular architecture.",
    image: "/images/byteflow_image.png",
    tags: ["Flutter", "Dart", "WebSockets", "OAuth2"],
    links: {
      web: "https://byteflow.bot/"
    },
    github: "#"
  },
  {
    title: "Courseway",
    description: "Streamlined the study abroad process, from course discovery to applications with a unified frontend for web, Android, and iOS.",
    image: "/images/courseconnect_image.png",
    tags: ["Flutter", "Responsive UI", "Client App"],
    links: {
      ios: "https://apps.apple.com/us/app/courseway/id6757051936",
      android: "https://play.google.com/store/apps/details?id=com.santamonica.courseway"
    },
    github: "#"
  },
  {
    title: "MAOWL",
    description: "Home automation dashboard for controlling smart devices, monitoring sensor data and managing household routines.",
    image: "/images/maowl_image.png",
    tags: ["Flutter", "Supabase", "FastAPI", "Raspberry Pi"],
    links: {},
    github: "#"
  },
  {
    title: "Bytes",
    description: "Food ordering app featuring real-time tracking and secure payments. Includes comprehensive restaurant management modules.",
    image: "/images/bytes_image.png",
    tags: ["Flutter", "Firebase", "Razorpay", "Real-time"],
    links: {
      ios: "https://apps.apple.com/ae/app/bytes-online-delivery/id1628595159",
      android: "https://play.google.com/store/apps/details?id=com.tapps.delivery"
    },
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
                  {project.github && project.github !== "#" && (
                    <a href={project.github} className={styles.iconBtn} target="_blank" rel="noopener noreferrer" title="View Source"><Github size={20} /></a>
                  )}
                  {project.links?.web && (
                    <a href={project.links.web} className={styles.iconBtn} target="_blank" rel="noopener noreferrer" title="Visit Website"><ExternalLink size={20} /></a>
                  )}
                  {project.links?.ios && (
                    <a href={project.links.ios} className={styles.iconBtn} target="_blank" rel="noopener noreferrer" title="App Store"><Apple size={20} /></a>
                  )}
                  {project.links?.android && (
                    <a href={project.links.android} className={styles.iconBtn} target="_blank" rel="noopener noreferrer" title="Play Store"><Smartphone size={20} /></a>
                  )}
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
