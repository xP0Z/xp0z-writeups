'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideUp } from './animation';

export default function Index({ withPreloader = false }) {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (!firstText.current || !secondText.current) return;
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main custom={withPreloader} variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      {mounted && theme !== 'dark' && (
        <div className={styles.logoContainer}>
          <Image src="/images/logo1.png" fill={true} alt="Logo" style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Open-Source Intelligence Analyst and CTF Player -</p>
          <p ref={secondText}>Open-Source Intelligence Analyst and CTF Player -</p>
        </div>
      </div>
    </motion.main>
  )
}
