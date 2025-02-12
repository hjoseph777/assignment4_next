import type { NextPage } from 'next'
import Layout from '../src/components/Layout'
import styles from '../src/styles/Page.module.css'
import { FaRocket, FaCode, FaPalette } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <div className={styles.cardGrid}>
            <div className={`${styles.card} depth-2`}>
              <FaRocket className={styles.cardIcon} />
              <h2>Fast Performance</h2>
              <p>Built with Next.js for optimal speed and efficiency.</p>
            </div>
            
            <div className={`${styles.card} depth-2`}>
              <FaCode className={styles.cardIcon} />
              <h2>Clean Code</h2>
              <p>Structured with best practices and modern techniques.</p>
            </div>
            
            <div className={`${styles.card} depth-2`}>
              <FaPalette className={styles.cardIcon} />
              <h2>Beautiful Design</h2>
              <p>Elegant themes with smooth transitions and effects.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
