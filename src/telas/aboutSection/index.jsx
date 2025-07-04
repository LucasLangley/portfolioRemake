import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaComments, FaBolt } from 'react-icons/fa';
import styles from './styles.module.css';

const About = () => {
  const aboutItems = [
    {
      icon: <FaRocket />,
      title: 'Front-End/Full-Stack',
      description: 'Atualmente trabalho com desenvolvimento Front-End e Full-Stack'
    },
    {
      icon: <FaEye />,
      title: 'React/JavaScript',
      description: 'Estudando e aprimorando conhecimentos em React e JavaScript'
    },
    {
      icon: <FaComments />,
      title: 'Desenvolvimento Web',
      description: 'Me pergunte sobre desenvolvimento web e tecnologias'
    },
    {
      icon: <FaBolt />,
      title: 'Novos Desafios',
      description: 'Sempre em busca de novos desafios e aprendizados!'
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Sobre <span>Mim</span></h2>
          <p>Conheça um pouco mais sobre minha jornada e objetivos</p>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Quem sou eu?</h3>
            <p>
              Sou Lucas Boroto, um desenvolvedor apaixonado por tecnologia e inovação. 
              Atualmente estou cursando Análise e Desenvolvimento de Sistemas no quarto semestre, 
              sempre buscando expandir meus conhecimentos e habilidades.
            </p>
            <p>
              Minha jornada na programação começou com HTML, CSS e JavaScript, e desde então 
              tenho explorado diversas tecnologias como React, Flutter, Python e Firebase. 
              Sou um desenvolvedor versátil que gosta de enfrentar novos desafios e aprender 
              novas tecnologias.
            </p>
            <p>
              Acredito que a tecnologia tem o poder de transformar o mundo e estou sempre 
              em busca de projetos que possam fazer a diferença na vida das pessoas.
            </p>
          </motion.div>

          <motion.div
            className={styles.aboutItems}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.aboutItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.itemIcon}>
                  {item.icon}
                </div>
                <div className={styles.itemContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 