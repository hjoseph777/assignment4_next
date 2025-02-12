import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Layout.module.css';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const NavBar: React.FC = () => {
    const router = useRouter();
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <ul className={styles.navList}>
                    <li>
                        <Link href="/" className={`${styles.navLink} ${router.pathname === "/" ? styles.active : ""}`} legacyBehavior={false}>
                            <FaHome className={styles.navIcon} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={`${styles.navLink} ${router.pathname === "/about" ? styles.active : ""}`} legacyBehavior={false}>
                            <FaInfoCircle className={styles.navIcon} />
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={`${styles.navLink} ${router.pathname === "/contact" ? styles.active : ""}`} legacyBehavior={false}>
                            <FaEnvelope className={styles.navIcon} />
                            <span>Contact</span>
                        </Link>
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
