'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './nav';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import ThemeSwitch from '../ThemeSwitch';
import Link from 'next/link';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        
        let st;
        if (pathname === '/') {
            gsap.set(button.current, {scale: 0})
            st = ScrollTrigger.create({
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            })
        } else {
            gsap.set(button.current, {scale: 1})
        }

        return () => {
            if (st) st.kill();
        }
    }, [pathname])

    return (
        <>
        <div ref={header} className={styles.header}>
            <Magnetic>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.dennis}>xp0z</p>
                        <p className={styles.snellenberg}>Vedh</p>
                    </div>
                </div>
            </Magnetic>
            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/events" style={{ textDecoration: 'none', color: 'inherit' }}>Events</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/tools" style={{ textDecoration: 'none', color: 'inherit' }}>Tools</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <ThemeSwitch />
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Magnetic>
                <div onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
            </Magnetic>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
