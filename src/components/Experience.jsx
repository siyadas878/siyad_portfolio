"use client"
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    role: "Flutter Developer",
    company: "DifferentByte Technologies",
    duration: "08/2024 – Present",
    location: "Kochi, Kerala",
    points: [
      "Architected 'ByteFlow', a domain-agnostic Flutter Web framework, reducing client development costs by 35%.",
      "Engineered an AI-Powered Content Studio using Generative AI APIs, cutting user task completion time by 60%.",
      "Optimized real-time performance to ensure sub-100ms latency under high load using WebSockets.",
      "Boosted conversion by 40% with a friction-less OAuth2 authentication system."
    ]
  },
  {
    role: "Flutter Developer",
    company: "Techjet",
    duration: "07/2023 – 08/2024",
    location: "Bangalore, Karnataka",
    points: [
      "Spearheaded Mobile Architecture migration to the BLoC pattern, improving code maintainability.",
      "Implemented Advanced Native Integration using Platform Channels for hardware functionality.",
      "Managed CI/CD Pipelines to automate testing and deployment, reducing release cycles.",
      "Optimized API communication, improving app response times by 20%."
    ]
  },
  {
    role: "Flutter Developer",
    company: "Bytes",
    duration: "01/2022 – 07/2023",
    location: "Malappuram, Kerala",
    points: [
      "Developed 'Bytes' Food Delivery App with real-time tracking (Firebase) and secure payments (Razorpay).",
      "Designed & Shipped complex UI/UX features for 'Building Needs' e-commerce platform.",
      "Collaborated within Cross-Functional Teams for timely delivery of 3 major app modules."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.title}>Professional Journey</h2>
        <p className={styles.subtitle}>My workspace details and key achievements</p>
      </motion.div>

      <div className={styles.timeline}>
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={styles.timelineItem}
          >
            <div className={styles.timelineDot}>
              <Briefcase size={16} />
            </div>
            <div className={`glass-card ${styles.timelineCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.role}>{item.role}</h3>
                <span className={styles.company}>{item.company}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.metaItem}><Calendar size={14} /> {item.duration}</span>
                <span className={styles.metaItem}><MapPin size={14} /> {item.location}</span>
              </div>
              <ul className={styles.points}>
                {item.points.map((point, pIndex) => (
                  <li key={pIndex} className={styles.point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
