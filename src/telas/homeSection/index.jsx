import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import image from '../../image.jfif';
import styles from './styles.module.css';

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    'Desenvolvedor Front-End',
    'Desenvolvedor Full-Stack',
    'Desenvolvedor Mobile',
    'Estudante de ADS'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 100;
    const deleteSpeed = 150;
    const pauseTime = 1000;

    const typewriter = () => {
      const currentWord = texts[currentText];
      
      if (isTyping) {
        if (currentChar < currentWord.length) {
          setTimeout(() => {
            setCurrentChar(currentChar + 1);
          }, typeSpeed);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(false);
          }, pauseTime);
        }
      } else {
        if (currentChar > 0) {
          setTimeout(() => {
            setCurrentChar(currentChar - 1);
          }, deleteSpeed);
        } else {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentText((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typewriter, 100);
    return () => clearTimeout(timer);
  }, [currentText, currentChar, isDeleting, isTyping, texts]);

  return (
    <section id="home" className={styles.home}>
      <div className={styles.homeContainer}>
        <motion.div 
          className={styles.homeContent}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.contentWrapper}>
            <h1>
              Olá, eu sou o <span>Lucas</span>
            </h1>
            
                      <div className={styles.textAnimation}>
            <h3>
              Eu sou um{' '}
              <span>
                {texts[currentText].substring(0, currentChar)}
                <span className={styles.cursor}>|</span>
              </span>
            </h3>
          </div>

            <p className={styles.description}>
              Atualmente estudante de Análise e Desenvolvimento de Sistemas no quarto semestre, 
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
                Contatar
              </Link>
              <Link to="experience" smooth={true} duration={500} className={`${styles.btn} ${styles.btnSecondary}`}>
                Ver Projetos
              </Link>
            </div>
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