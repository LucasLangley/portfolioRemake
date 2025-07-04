import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase,
  FaMobile, FaCode, FaTools, FaLanguage
} from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiMysql, SiTailwindcss } from 'react-icons/si';
import styles from './styles.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, level: 90 },
        { name: 'CSS', icon: <FaCss3Alt />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 80 },
        { name: 'React', icon: <FaReact />, level: 75 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 70 }
      ]
    },
    {
      title: 'Backend',
      icon: <FaDatabase />,
      skills: [
        { name: 'Python', icon: <FaPython />, level: 70 },
        { name: 'MySQL', icon: <SiMysql />, level: 65 },
        { name: 'SQL', icon: <FaDatabase />, level: 70 },
        { name: 'Firebase', icon: <SiFirebase />, level: 75 }
      ]
    },
    {
      title: 'Mobile',
      icon: <FaMobile />,
      skills: [
        { name: 'Flutter', icon: <SiFlutter />, level: 80 },
        { name: 'Dart', icon: <FaCode />, level: 75 }
      ]
    },
    {
      title: 'Ferramentas',
      icon: <FaTools />,
      skills: [
        { name: 'VSCode', icon: <FaCode />, level: 90 },
        { name: 'IDX', icon: <FaCode />, level: 70 },
        { name: 'Cursor', icon: <FaCode />, level: 85 }
      ]
    },
    {
      title: 'Idiomas',
      icon: <FaLanguage />,
      skills: [
        { name: 'Inglês', icon: <FaLanguage />, level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Habilidades <span>Técnicas</span></h2>
          <p>Minhas competências e tecnologias que domino</p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={styles.skillItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.skillInfo}>
                      <div className={styles.skillIcon}>
                        {skill.icon}
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 