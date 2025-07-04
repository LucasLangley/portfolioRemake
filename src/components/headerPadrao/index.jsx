import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './styles.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <Link to="home" className={styles.logo} smooth={true} duration={500}>
          Lucas <span>Boroto</span>
        </Link>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            Sobre
          </Link>
          <Link to="experience" smooth={true} duration={500} onClick={closeMenu}>
            Experiência
          </Link>
          <Link to="education" smooth={true} duration={500} onClick={closeMenu}>
            Educação
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
            Habilidades
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 