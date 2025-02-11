// Layout.tsx - Defines the main layout structure for the application.
import React from 'react';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Head from 'next/head';
import NavBar from './NavBar';
import { useRouter } from 'next/router';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const isHome = router.pathname === '/';

    return (
        <div className={styles.container}>
            <Head>
                <title>My Website</title>
                <meta name="description" content="My website description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            {isHome && (
                <div className={styles.heroSection}>
                    <div className={styles.heroOverlay} />
                    <div>
                        <h1>Welcome to My Website</h1>
                        <p>A modern Next.js application</p>
                    </div>
                </div>
            )}
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
