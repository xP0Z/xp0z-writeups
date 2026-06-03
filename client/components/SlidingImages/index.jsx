import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    { color: "#e3e5e7", src: "aiorreal01.jpg" },
    { color: "#d6d7dc", src: "cartographers-secret.jpg" },
    { color: "#e3e3e3", src: "data-center.jpg" },
    { color: "#21242b", src: "flock-02.jpg" }
]

const slider2 = [
    { color: "#d4e3ec", src: "has_it_really_been_2_years.jpg" },
    { color: "#e5e0e1", src: "office_switching.jpg" },
    { color: "#d7d4cf", src: "sock-01.jpg" },
    { color: "#e1dad6", src: "sock-02.jpg" }
]

export default function Index() {

    const container = useRef(null);
    const curveContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    
    const { scrollYProgress: curveProgress } = useScroll({
        target: curveContainer,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(curveProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <div ref={curveContainer}></div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
