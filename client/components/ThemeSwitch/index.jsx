'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Magnetic from '../Magnetic';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.themeSwitchFallback}></div>;
  }

  const toggleTheme = () => {
    // Disabled for now
    // setTheme(theme === 'dark' ? 'normal' : 'dark');
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div className={styles.themeSwitchContainer}>
      <Magnetic>
        <div className={`${styles.themeSwitch} ${styles.disabled}`} onClick={toggleTheme}>
          <p>{theme === 'dark' ? 'Normal' : 'Dark'}</p>
          <div className={`${styles.tooltip} ${clicked ? styles.visible : ''}`}>
            Experimental
          </div>
        </div>
      </Magnetic>
    </div>
  );
}
