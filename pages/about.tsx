import Layout from '../src/components/Layout';
import styles from '../src/styles/Page.module.css';
import { FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

const About = () => {
    return (
        <Layout>
            <div className={styles.pageContainer}>
                <div className={styles.heroSection}>
                    <h1>About Us</h1>
                    <p className={styles.subtitle}>Discover our story and mission</p>
                </div>
                
                <div className={styles.content}>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <FaUsers className={styles.cardIcon} />
                            <h2>Our Team</h2>
                            <p>Dedicated professionals working together to deliver excellence.</p>
                        </div>
                        
                        <div className={styles.card}>
                            <FaLightbulb className={styles.cardIcon} />
                            <h2>Our Mission</h2>
                            <p>Creating innovative solutions for tomorrow&apos;s challenges.</p>
                        </div>
                        
                        <div className={styles.card}>
                            <FaChartLine className={styles.cardIcon} />
                            <h2>Our Growth</h2>
                            <p>Continuously evolving and expanding our capabilities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
