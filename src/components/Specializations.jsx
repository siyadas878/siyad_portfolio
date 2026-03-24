"use client"
import { motion } from "framer-motion";
import styles from "./Specializations.module.css";
import { Smartphone, Server, Cpu, Layers, Database, Wrench } from "lucide-react";

const skillsData = [
  {
    icon: <Smartphone size={32} />,
    title: "Core Mobile",
    skills: ["Flutter", "Dart", "Kotlin (Android)", "Platform Channels"],
    color: "rgba(0, 255, 204, 0.4)"
  },
  {
    icon: <Server size={32} />,
    title: "Backend & Cloud",
    skills: ["Node.js", "Python (FastAPI)", "AWS (EC2, S3)", "Firebase", "Supabase"],
    color: "rgba(153, 51, 255, 0.4)"
  },
  {
    icon: <Cpu size={32} />,
    title: "Video & IoT",
    skills: ["HLS/RTSP Streaming", "WebRTC", "MQTT", "WebSocket Architecture"],
    color: "rgba(255, 51, 102, 0.4)"
  },
  {
    icon: <Layers size={32} />,
    title: "Architecture & State",
    skills: ["Clean Architecture", "SOLID Principles", "BLOC", "Provider", "MVVM"],
    color: "rgba(255, 204, 0, 0.4)"
  },
  {
    icon: <Database size={32} />,
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "SQLite (Drift/Hive)"],
    color: "rgba(0, 204, 255, 0.4)"
  },
  {
    icon: <Wrench size={32} />,
    title: "DevOps & Tools",
    skills: ["CI/CD (Codemagic/GitHub Actions)", "Git", "Docker", "Figma", "Playwright"],
    color: "rgba(51, 255, 51, 0.4)"
  }
];

export default function Specializations() {
  return (
    <section id="skills" className={styles.section}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.title}>Specialisations</h2>
        <p className={styles.subtitle}>My technical expertise and areas of depth</p>
      </motion.div>

      <div className={styles.grid}>
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-card ${styles.card}`}
            style={{ '--hover-color': item.color }}
          >
            <div className={styles.iconWrapper} style={{ color: item.color.replace('0.4', '1') }}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <ul className={styles.skillList}>
              {item.skills.map((skill, sIndex) => (
                <li key={sIndex} className={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
