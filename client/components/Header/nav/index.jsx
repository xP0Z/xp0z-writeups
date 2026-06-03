import React from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion'
import Magnetic from '../../Magnetic'
import Curve from './Curve'
import Link from 'next/link'

export default function Index() {
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  }

  const slide = {
    initial: { x: 80 },
    enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: i => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
  }

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Events", href: "/events" },
    { title: "Tools", href: "/tools" },
    { title: "About", href: "/about" },
  ]

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <motion.div 
                custom={index} 
                variants={slide} 
                initial="initial" 
                animate="enter" 
                exit="exit" 
                key={index} 
              >
                <Magnetic>
                  <Link href={data.href}>{data.title}</Link>
                </Magnetic>
              </motion.div>
            )
          })}
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.header}>
            <p>Socials</p>
          </div>
          <div className={styles.footer}>
            <Magnetic>
              <a href="https://github.com/xP0Z" target="_blank" rel="noreferrer">Github</a>
            </Magnetic>
            <Magnetic>
              <a>Discord</a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/xp0z" target="_blank" rel="noreferrer">LinkedIn</a>
            </Magnetic>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}
