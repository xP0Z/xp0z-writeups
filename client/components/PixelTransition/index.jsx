'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './style.module.scss';

const Pixel = ({ scrollYProgress, index, columns, rows, pixelWidth, pixelHeight }) => {
    // We use a clean, non-random wave effect based on row and column position.

    // Calculate which row this pixel is on
    const row = Math.floor(index / columns);
    const col = index % columns;
    const centerCol = (columns - 1) / 2;
    const distFromCenter = centerCol > 0 ? Math.abs(col - centerCol) / centerCol : 0;
    
    // Bottom pixels (row = rows-1) get 0, Top pixels (row = 0) get ~0.7
    const reversedRowProgress = rows > 1 ? (rows - 1 - row) / (rows - 1) : 0;
    
    // Remove randomness. Instead, make the center fade slightly later than the edges (U-shape)
    // The larger the startFade, the LATER it fades. Center gets +0.15, edges get +0.
    const rawStartFade = (reversedRowProgress * 0.7) + ((1 - distFromCenter) * 0.15);
    
    // Clamp startFade to a max of 0.89 so that endFade never exceeds 0.99
    // Framer Motion strictly requires input ranges to be within [0, 1]
    const startFade = Math.max(0, Math.min(0.89, rawStartFade));
    const endFade = startFade + 0.1;
    
    const opacity = useTransform(scrollYProgress, [startFade, endFade], [1, 0]);

    return (
        <motion.div style={{ opacity, width: pixelWidth, height: pixelHeight }} className={styles.pixel} />
    )
}

export default function PixelTransition() {
    const container = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight * 0.8 // 80vh transition height
            });
        }
        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 95%", "start 25%"]
    });

    // Increase pixel size by reducing the number of columns from 25 to 15
    const pixelWidth = dimensions.width > 0 ? Math.floor(dimensions.width / 15) : 100;
    // Make pixels rectangular (wider than they are tall, like retro CRT blocks)
    const pixelHeight = pixelWidth > 0 ? Math.floor(pixelWidth * 0.6) : 60; 
    
    const columns = pixelWidth > 0 ? Math.ceil(dimensions.width / pixelWidth) : 0;
    const rows = pixelHeight > 0 ? Math.ceil(dimensions.height / pixelHeight) : 0;
    const totalPixels = columns * rows;

    return (
        <div ref={container} className={styles.pixelContainer} style={{ height: dimensions.height > 0 ? `${dimensions.height}px` : '80vh' }}>
            <div className={styles.grid}>
                {
                    totalPixels > 0 && [...Array(totalPixels)].map((_, i) => {
                        return <Pixel key={i} index={i} columns={columns} rows={rows} scrollYProgress={scrollYProgress} pixelWidth={pixelWidth} pixelHeight={pixelHeight} />
                    })
                }
            </div>
        </div>
    )
}
