'use client';
import { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import CurveFooter from '../../components/CurveFooter';
import styles from './style.module.scss';
import { motion } from 'framer-motion';

export default function ToolsClient() {
    const container = useRef(null);

    const tools = [
        {
            title: "Sherlock",
            description: "Multi-platform username attribution tool. Used for hunting down social media accounts and tracking target nomenclature across the digital landscape.",
            link: "https://github.com/sherlock-project/sherlock"
        },
        {
            title: "GHunt",
            description: "Advanced Google account OSINT framework. Essential for extracting account footprints, service utilization, and associated data from target Gmail addresses.",
            link: "https://github.com/mxrch/GHunt"
        },
        {
            title: "CyberChef",
            description: "The Cyber Swiss Army Knife. Utilized for rapid data decoding, encryption analysis, and manipulating structured data formats during CTF challenges.",
            link: "https://gchq.github.io/CyberChef/"
        },
        {
            title: "Advanced Google Dorking",
            description: "Primary intelligence gathering via advanced search operators. Crucial for uncovering exposed directories, cached server data, and specific file types.",
            link: "https://www.google.com/"
        },
        {
            title: "Yandex Images & TinEye",
            description: "The reverse image search stack. Yandex is leveraged for facial recognition and Eastern European geolocation, while TinEye tracks the oldest chronological upload of an asset.",
            link: "https://yandex.com/images/"
        },
        {
            title: "The OSINT Framework",
            description: "The master directory. A web-based visual tree mapping out hundreds of open-source intelligence resources categorized by data type.",
            link: "https://osintframework.com/"
        }
    ];

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
            <div ref={container} className={styles.pageContent}>
                <section className={styles.introSection}>
                    <div className={styles.heroText}>
                        <motion.h2 variants={slideUp} initial="initial" animate="enter">
                            My investigative arsenal.
                        </motion.h2>
                    </div>
                </section>

                <section className={styles.toolsSection}>
                    <div className={styles.toolsContainer}>
                        <div className={styles.toolsGrid}>
                            {tools.map((tool, index) => (
                                <div className={styles.toolItem} key={index}>
                                    <div className={styles.number}>0{index + 1}</div>
                                    <h4>{tool.title}</h4>
                                    <p>{tool.description}</p>
                                    <a href={tool.link} target="_blank" rel="noopener noreferrer">View Tool &rarr;</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <CurveFooter />

            </div>

            <Contact />
        </main>
    )
}
