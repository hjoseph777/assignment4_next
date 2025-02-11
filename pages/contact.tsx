import Layout from '../src/components/Layout';
import styles from '../src/styles/Page.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <Layout>
            <div className={styles.pageContainer}>
                <div className={styles.heroSection}>
                    <h1>Contact Us</h1>
                    <p className={styles.subtitle}>Get in touch with our team</p>
                </div>
                
                <div className={styles.content}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoCard}>
                                <FaEnvelope className={styles.infoIcon} />
                                <h3>Email Us</h3>
                                <p>contact@example.com</p>
                            </div>
                            <div className={styles.infoCard}>
                                <FaPhone className={styles.infoIcon} />
                                <h3>Call Us</h3>
                                <p>(555) 123-4567</p>
                            </div>
                            <div className={styles.infoCard}>
                                <FaMapMarkerAlt className={styles.infoIcon} />
                                <h3>Visit Us</h3>
                                <p>123 Web Dev Lane</p>
                            </div>
                        </div>
                        
                        <form className={styles.contactForm}>
                            <input type="text" placeholder="Your Name" className={styles.input} />
                            <input type="email" placeholder="Your Email" className={styles.input} />
                            <textarea placeholder="Your Message" className={styles.textarea}></textarea>
                            <button type="submit" className={styles.button}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
