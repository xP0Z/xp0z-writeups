'use client';

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { text, curve, translate } from './anim';
import styles from './style.module.scss';

const routes = {
    "/": "Home",
    "/about": "About",
    "/events": "Events",
    "/tools": "Tools",
    "/contact": "Contact"
}

const anim = (variants, isInitialLoad) => {
    return {
        variants,
        initial: isInitialLoad ? "initialLoad" : "initial",
        animate: isInitialLoad ? "initialLoad" : "enter",
        exit: "exit"
    }
}

export default function Curve({children, isInitialLoad}) {
    const pathname = usePathname();
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    })

    useEffect( () => {
        function resize(){
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])
    
    let routeName = routes[pathname] || "xp0zure";
    if (pathname.startsWith('/cit-ctf')) routeName = "CIT@CTF";
    if (pathname.startsWith('/ramunchers-ctf')) routeName = "Ramunchers CTF";

    return (
    <div className={styles.curve}>
       <div style={{opacity: (dimensions.width == null && !isInitialLoad) ? 1 : 0}} className={styles.background}/>
       <motion.p className={styles.route} {...anim(text, isInitialLoad)}>
            {routeName}
        </motion.p>
       {dimensions.width != null && <SVG {...dimensions} isInitialLoad={isInitialLoad}/>}
        {
            children
        }
    </div>
    )
}

const SVG = ({height, width, isInitialLoad}) => {
    const initialPath = `
        M0 300 
        Q${width/2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width/2} ${height + 600} 0 ${height + 300}
        L0 0
    `

    const targetPath = `
        M0 300
        Q${width/2} 0 ${width} 300
        L${width} ${height}
        Q${width/2} ${height} 0 ${height}
        L0 0
    `

    return (
        <motion.svg className={styles.svg} {...anim(translate, isInitialLoad)}>
            <motion.path {...anim(curve(initialPath, targetPath), isInitialLoad)} />
        </motion.svg>
    )
}
