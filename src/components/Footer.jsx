"use client"
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.contactSection}
        >
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>Feel free to reach out for collaborations or just a friendly hello</p>
          
          <div className={styles.contactGrid}>
            <a href="mailto:siyadas878@gmail.com" className={styles.contactCard}>
              <Mail size={24} className={styles.icon} />
              <div className={styles.contactInfo}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>siyadas878@gmail.com</span>
              </div>
            </a>

            <a href="tel:+971544926287" className={styles.contactCard}>
              <Phone size={24} className={styles.icon} />
              <div className={styles.contactInfo}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>+971 54 492 6287</span>
              </div>
            </a>

            <div className={styles.contactCard}>
              <MapPin size={24} className={styles.icon} />
              <div className={styles.contactInfo}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>Dubai, UAE</span>
              </div>
            </div>
          </div>
        </motion.div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Mohammed Siyadh A S. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="https://github.com/siyadas" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mohammedsiyadh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <BookOpen size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
