import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './styles.module.css';

const Education = () => {
  const education = [
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Escola e Faculdade SENAI Taubaté Félix Guisard',
      period: '2024 - 2026',
      location: 'Taubaté - SP (Presencial)',
      description: 'Formação técnica em desenvolvimento de sistemas com foco em programação, banco de dados e desenvolvimento web.',
      status: 'Em andamento'
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.educationContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Educação</h2>
          <p>Minha formação acadêmica e certificações</p>
        </motion.div>

        <div className={styles.educationTimeline}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.educationItem}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.educationContent}>
                <div className={styles.educationIcon}>
                  <FaGraduationCap />
                </div>
                
                <div className={styles.educationDetails}>
                  <h3>{edu.degree}</h3>
                  <div className={styles.educationMeta}>
                    <span className={styles.institution}>
                      <FaGraduationCap />
                      {edu.institution}
                    </span>
                    <span className={styles.period}>
                      <FaCalendarAlt />
                      {edu.period}
                    </span>
                    <span className={styles.location}>
                      <FaMapMarkerAlt />
                      {edu.location}
                    </span>
                  </div>
                  
                  <p className={styles.educationDescription}>{edu.description}</p>
                  
                  <div className={styles.educationStatus}>
                    <span className={`${styles.statusBadge} ${edu.status === 'Em andamento' ? styles.ongoing : styles.completed}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.certifications}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Certificações</h3>
          <div className={styles.certificationsGrid}>
            <div className={styles.certificationItem}>
              <h4>CCNA Cisco</h4>
              <p>Certificação Cisco Certified Network Associate obtida através de processo seletivo entre mais de 30.000 candidatos.</p>
              <span className={styles.certificationYear}>2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 