'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import Rounded from '../Rounded';
import Link from 'next/link';

const projects = [
  {
    title: "boroCTF",
    type: "Writeups",
    href: "/boro-ctf"
  },
  {
    title: "DalCTF",
    type: "Writeups",
    href: "/dal-ctf"
  },
  {
    title: "CIT@CTF",
    type: "Writeups",
    href: "/cit-ctf"
  },
  {
    title: "Ramunchers CTF",
    type: "Writeups",
    href: "/ramunchers-ctf"
  },
  {
    title: "OSINT Industries",
    type: "Writeup",
  }
]

export default function Index() {
  return (
    <div className={styles.projects}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          const content = (
            <div className={styles.project}>
              <h2>{project.title}</h2>
              <p>{project.type}</p>
            </div>
          );

          if (project.href) {
            return (
              <Link href={project.href} key={index} style={{textDecoration: 'none', color: 'inherit'}}>
                {content}
              </Link>
            )
          }

          return (
            <div key={index} style={{textDecoration: 'none', color: 'inherit'}}>
              {content}
            </div>
          )
        })}
        <div className={styles.moreButton}>
          <Link href="/events" style={{textDecoration: 'none', color: 'inherit'}}>
            <Rounded>
              <p>More CTFs</p>
            </Rounded>
          </Link>
        </div>
      </div>
    </div>
  )
}
