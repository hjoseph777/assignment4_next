// Footer.tsx - Defines the footer component for the application.
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Layout.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className={styles.footerSection}>
                    <h3>Connect</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="mailto:contact@example.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                
                <div className={styles.footerSection}>
                    <h3>Contact</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Address: 123 Web Dev Lane</p>
                </div>
            </div>
            
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
