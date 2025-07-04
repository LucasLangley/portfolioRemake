import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import image from '../../image.jfif';
import styles from './styles.module.css';

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Desenvolvedor Front-End',
    'Desenvolvedor Full-Stack',
    'Desenvolvedor Mobile',
    'Estudante de ADS'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className={styles.home}>
      <div className={styles.homeContainer}>
        <motion.div 
          className={styles.homeContent}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Olá, eu sou <span>Lucas Boroto</span>
          </h1>
          
          <div className={styles.textAnimation}>
            <h3>Eu sou um <span>{texts[currentText]}</span></h3>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhone />
              <span>(12) 99163-3295</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope />
              <span>lucasboroto00@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt />
              <span>Taubaté - SP</span>
            </div>
          </div>

          <p className={styles.description}>
            Atualmente estudante de Análise e Desenvolvimento de Sistemas no terceiro semestre, 
            em busca de oportunidades para adquirir conhecimento e experiência. 
            Sempre apto a aprender qualquer função e enfrentar novos desafios!
          </p>

          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/lucas-boroto" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/LucasLangley" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>

          <div className={styles.btnGroup}>
            <Link to="contact" smooth={true} duration={500} className={`${styles.btn} ${styles.btnPrimary}`}>
              Contratar
            </Link>
            <Link to="experience" smooth={true} duration={500} className={`${styles.btn} ${styles.btnSecondary}`}>
              Ver Projetos
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className={styles.homeImg}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={image} alt="Lucas Boroto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 