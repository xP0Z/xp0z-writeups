'use client';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import CurveFooter from '../../components/CurveFooter';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EventsClient({ events }) {
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
                    <motion.h1 variants={slideUp} initial="initial" animate="enter">Events</motion.h1>
                </section>
                
                <section className={styles.content}>
                    <div className={styles.eventsList}>
                        {events.map((event, index) => (
                            <Link href={event.path} key={index} className={styles.eventRowLink}>
                                <div className={styles.eventRow}>
                                    <h2>{event.title}</h2>
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
