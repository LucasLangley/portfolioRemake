import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import styles from './styles.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Desenvolvimento de Portfólio Pessoal',
      role: 'Desenvolvedor Front-end',
      period: 'Março/2024',
      description: [
        'Criação de portfólio utilizando HTML, CSS e JavaScript',
        'Implementação de design responsivo e interativo',
        'Hospedagem e deploy na plataforma Netlify',
        'Otimização para diferentes dispositivos',
        'Apresentação de projetos e habilidades técnicas'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
      link: 'https://boroto.netlify.app/',
      github: null
    },
    {
      title: 'Sistema de Delivery Inspirado no iFood',
      role: 'Desenvolvedor React',
      period: 'Junho/2024',
      description: [
        'Desenvolvimento de aplicação completa utilizando React',
        'Integração com API de localização para rastreamento de pedidos',
        'Implementação de funcionalidades como cadastro de restaurantes e cardápios',
        'Criação de interface de usuário intuitiva e responsiva',
        'Implementação de banco de dados Firebase para armazenamento seguro'
      ],
      technologies: ['React', 'Firebase', 'APIs', 'JavaScript'],
      link: null,
      github: null
    },
    {
      title: 'Sistema de Monitoramento de Saúde Corporativa',
      role: 'Desenvolvedor Full-stack',
      period: 'Julho/2024 – Novembro/2024',
      description: [
        'Desenvolvimento de aplicação completa para monitoramento de saúde corporativa',
        'Implementação de banco de dados Firebase para armazenamento seguro',
        'Criação de dashboard interativo com visualização gráfica de métricas',
        'Integração de funcionalidades de exportação de relatórios em PDF e CSV',
        'Desenvolvimento de API para conexão com sistemas de saúde externos',
        'Implementação de módulo de IA para análise preditiva',
        'Estilização responsiva utilizando Tailwind CSS'
      ],
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'APIs', 'IA'],
      link: null,
      github: null
    },
    {
      title: 'Aplicativo de Progresso Fitness com Temática de Solo Leveling',
      role: 'Desenvolvedor Mobile',
      period: 'Janeiro/2025 – Presente',
      description: [
        'Desenvolvimento de aplicativo mobile utilizando Flutter e Dart',
        'Criação de sistema gamificado inspirado no manhwa Solo Leveling',
        'Implementação de funcionalidades de rastreamento de progresso fitness',
        'Design de interface com elementos visuais temáticos',
        'Integração de sistema de níveis, conquistas e recompensas',
        'Desenvolvimento de algoritmos para análise de desempenho',
        'Aplicação de animações e transições fluidas',
        'Implementação de recursos sociais para competição entre usuários'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Gamificação'],
      link: null,
      github: null
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Experiência <span>Profissional</span></h2>
          <p>Projetos e experiências que desenvolvi ao longo da minha jornada</p>
        </motion.div>

        <div className={styles.experienceTimeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.experienceItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.experienceContent}>
                <div className={styles.experienceHeader}>
                  <h3>{exp.title}</h3>
                  <span className={styles.role}>{exp.role}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                
                <ul className={styles.experienceDescription}>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className={styles.experienceTechnologies}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                <div className={styles.experienceLinks}>
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                      <FaExternalLinkAlt />
                      Ver Projeto
                    </a>
                  )}
                  {exp.github && (
                    <a href={exp.github} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.github}`}>
                      <FaGithub />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 