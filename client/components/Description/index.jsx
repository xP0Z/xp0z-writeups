import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../Rounded';
import Link from 'next/link';

export default function Index() {
    const phrase = "You can't fix what you can't see. xp0zure shines a light on your public digital footprint so you can lock it down.";
    const description = useRef(null);
    const isInView = useInView(description)

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for tracking digital trails, geospatial mapping & OSINT investigative techniques positions me in a unique place in the open-source intelligence world.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Rounded className={styles.button} backgroundColor="#455CE9">
                            <p>About me</p>
                        </Rounded>
                    </Link>
                </div>
            </div>
        </div>
    )
}
