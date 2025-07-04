import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './styles.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Telefone',
      value: '(12) 99163-3295',
      link: 'tel:+5512991633295'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'lucasboroto00@gmail.com',
      link: 'mailto:lucasboroto00@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'Taubaté - SP, Brasil',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucas-boroto'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      url: 'https://github.com/LucasLangley'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Entre em <span>Contato</span></h2>
          <p>Vamos conversar sobre oportunidades e projetos</p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Informações de Contato</h3>
            <p>Estou sempre aberto a novas oportunidades e parcerias. Entre em contato comigo!</p>

            <div className={styles.contactDetails}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={styles.contactItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.contactIcon}>
                    {info.icon}
                  </div>
                  <div className={styles.contactText}>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.socialLinks}>
              <h4>Redes Sociais</h4>
              <div className={styles.socialIcons}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 