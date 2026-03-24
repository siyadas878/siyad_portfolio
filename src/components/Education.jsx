"use client"
import { motion } from "framer-motion";
import styles from "./Education.module.css";
import { GraduationCap, Award, Globe } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.title}>Education & Achievements</h2>
        <p className={styles.subtitle}>My academic background and professional recognition</p>
      </motion.div>

      <div className={styles.grid}>
        {/* Education Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.column}
        >
          <div className={styles.sectionTitle}>
            <GraduationCap size={24} className={styles.icon} />
            <span>Education</span>
          </div>
          <div className={`glass-card ${styles.card}`}>
            <h3 className={styles.degree}>Bachelor's of Science</h3>
            <span className={styles.major}>Computer Science</span>
            <div className={styles.meta}>
              <span className={styles.institution}>University of Calicut</span>
              <span className={styles.duration}>2017 – 2020</span>
            </div>
            <p className={styles.description}>
              Foundation in algorithms, data structures, database management, and software engineering principles.
            </p>
          </div>
        </motion.div>

        {/* Achievements Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.column}
        >
          <div className={styles.sectionTitle}>
            <Award size={24} className={styles.icon} />
            <span>Open Source & Awards</span>
          </div>
          
          <div className={styles.cardsList}>
            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniHeader}>
                <h4 className={styles.miniTitle}>Creator of flutter_workflow_builder</h4>
                <a href="https://pub.dev" target="_blank" rel="noopener noreferrer" className={styles.pubLink}>
                  <Globe size={16} /> pub.dev
                </a>
              </div>
              <p className={styles.miniDesc}>
                Developed and published a Flutter package to streamline the creation of visual node-based workflow systems. Stable release v1.0.2.
              </p>
            </div>

            <div className={`glass-card ${styles.miniCard}`}>
              <div className={styles.miniHeader}>
                <h4 className={styles.miniTitle}>Employee of the Month</h4>
              </div>
              <p className={styles.miniDesc}>
                Recognized for excellence in software delivery and critical problem-solving during high-priority release cycles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
