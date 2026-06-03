'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from '../components/Preloader'
import Header from '../components/Header'
import Description from '../components/Description'
import SlidingImages from '../components/SlidingImages'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Projects from '../components/Projects'

let isInitialLoad = true;

export default function Home() {

  const [isLoading, setIsLoading] = useState(isInitialLoad);
  const [shouldShowPreloader, setShouldShowPreloader] = useState(isInitialLoad);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          if (isInitialLoad) {
            isInitialLoad = false;
            setTimeout( () => {
              setIsLoading(false);
              document.body.style.cursor = 'default'
              window.scrollTo(0,0);
            }, 2000)
          } else {
            setIsLoading(false);
            setShouldShowPreloader(false);
          }
      }
    )()
  }, [])

  return (
    <main>
      {shouldShowPreloader && (
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
      )}
      <Header />
      <Landing withPreloader={shouldShowPreloader} />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
