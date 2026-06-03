'use client';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import CurveFooter from '../../components/CurveFooter';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RamunchersClient({ writeups }) {
    useEffect( () => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
                
                setTimeout( () => {
                    document.body.style.cursor = 'default';
                    window.scrollTo(0,0);
                }, 500)
            }
        )()
    }, [])

    const slideUp = {
        initial: {
            y: 300,
            opacity: 0
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
        }
    }

    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.pageContent}>
                <section className={styles.hero}>
                    <motion.h1 variants={slideUp} initial="initial" animate="enter">RAMUNCHERS CTF</motion.h1>
                    <motion.div className={styles.meta} variants={slideUp} initial="initial" animate="enter">
                        <div className={styles.column}>
                            <h3>TEAM</h3>
                            <p>Rayleigh</p>
                        </div>
                        <div className={styles.column}>
                            <h3>RANK</h3>
                            <p>43rd</p>
                        </div>
                        <div className={styles.column}>
                            <h3>date</h3>
                            <p>10-13 May/26</p>
                        </div>
                    </motion.div>
                </section>
                
                <section className={styles.content}>
                    <div className={styles.writeupsList}>
                        {writeups.map((writeup, index) => (
                            <Link href={`/ramunchers-ctf/${writeup.slug}`} key={index} className={styles.writeupRowLink}>
                                <div className={styles.writeupRow}>
                                    <h2>{writeup.meta.title}</h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
                <CurveFooter />

            </div>

            <Contact />
        </main>
    )
}
