'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Modal from '../../components/Modal';
import styles from './style.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

import CurveFooter from '../../components/CurveFooter';

export default function AboutClient() {
    const container = useRef(null);
    const [modal, setModal] = useState({active: false, index: 0})

    const projects = [
        { title: "OSINT EDUCATIONAL SERIES", role: "Trace labs", src: "osint-educational-series.png", color: "#8C8C8C" },
        { title: "Introduction to OSINT", role: "Security Blue Team", src: "SBT_Introduction to OSINT-course.png", color: "#EFE8D3" },
        { title: "OSINT training", role: "Basel Institute on Governance", src: "Basel_Certificate_of_Completion.png", color: "#706D63" },
        { title: "OSINT Advanced Techniques", role: "FINDX", src: "f1ndx_3_Certification.png", color: "#EFE8D3" },
        { title: "VishwaCTF Mini", role: "CYBERCELL VIIT", src: "Vishwactfmini_2025_Rank02.png", color: "#8C8C8C" }
    ]

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
                            Mapping the unseen digital footprint.
                        </motion.h2>
                    </div>
                    
                    <div className={styles.heroContent}>
                        <div className={styles.textBlock}>
                            <p>
                                I specialize in uncovering digital footprints, analyzing metadata, and geolocating targets. With a strong foundation in open-source intelligence, I shine a light on public digital vulnerabilities so you can lock them down.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.focusSection}>
                    <div className={styles.focusContainer}>
                        <h3>My investigative focus ...</h3>

                        <div className={styles.servicesGrid}>
                            <div className={styles.serviceItem}>
                                <div className={styles.number}>01</div>
                                <h4>GEOINT & Tracking</h4>
                                <p>I perform precision image geolocation, timeline reconstruction, and open-source mapping to pinpoint locations and track target movements across the physical and digital world.</p>
                            </div>

                            <div className={styles.serviceItem}>
                                <div className={styles.number}>02</div>
                                <h4>SOCMINT & Attribution</h4>
                                <p>Using multi-platform username attribution, metadata correlation, and specialized tools like Sherlock and GHunt, I connect fragmented online identities to establish concrete target profiles.</p>
                            </div>

                            <div className={styles.serviceItem}>
                                <div className={styles.number}>03</div>
                                <h4>Investigative Methodology</h4>
                                <p>All investigations are conducted with strict adherence to Berkeley Protocol principles, ensuring ethical tracking, proper evidence handling, and structured, actionable reporting.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.certificatesSection}>
                    <div className={styles.certificatesContainer}>
                        <div className={styles.sectionHeader}>
                            <p>Certificates, badges & ctf</p>
                        </div>
                        
                        <div className={styles.certificateList}>
                            {projects.map((project, index) => {
                                return (
                                    <div 
                                        className={styles.certificate}
                                        onMouseEnter={() => {setModal({active: true, index})}}
                                        onMouseLeave={() => {setModal({active: false, index})}}
                                        key={index}
                                    >
                                        <h2>{project.title}</h2>
                                        <p>{project.role}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <CurveFooter />
            </div>
            <Contact />
            <Modal modal={modal} projects={projects}/>
        </main>
    )
}
