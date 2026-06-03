'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss';

export default function CurveFooter() {
    const curveContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: curveContainer,
        offset: ["start end", "end start"]
    });
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <>
            <div ref={curveContainer}></div>
            <motion.div style={{height}} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </>
    );
}
