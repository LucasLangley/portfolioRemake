import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import styles from './styles.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Lucas Boroto</h3>
            <p>Desenvolvedor Front-End/Full-Stack apaixonado por tecnologia e inovação.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#experience">Experiência</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Redes Sociais</h4>
            <div className={styles.footerSocial}>
              <a href="https://www.linkedin.com/in/lucas-boroto" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/LucasLangley" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4>Contato</h4>
            <p>lucasboroto00@gmail.com</p>
            <p>(12) 99163-3295</p>
            <p>Taubaté - SP</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {currentYear} Lucas Boroto. Todos os direitos reservados.
          </p>
          <p className={styles.madeWith}>
            Feito com <FaHeart className={styles.heart} /> usando React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 