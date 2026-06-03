'use client';
import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import webGLFluidEnhanced from 'webgl-fluid';
import styles from './style.module.scss';

export default function FluidBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== 'dark') return;
    
    if (canvasRef.current) {
      webGLFluidEnhanced(canvasRef.current, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1.2,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.2,
        PRESSURE_ITERATIONS: 25,
        CURL: 50,
        SPLAT_RADIUS: 0.35,
        SPLAT_FORCE: 6000,
        SHADING: true,
        SPLAT_COLOR: { r: 0.8, g: 0.8, b: 0.85 },
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 }, // solid black background behind the fluid
        TRANSPARENT: false,
        BLOOM: false,
        SUNRAYS: false,
      });
      
      // Because canvas has pointer-events: none, we must forward events
      const forwardEvent = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        // Disabling forwarding if event target is the canvas itself to prevent loop
        if (e.target === canvas) return;

        // webgl-fluid listens for mousemove, mousedown, mouseup, touchstart, touchmove, touchend
        const clonedEvent = new MouseEvent(e.type, {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
          cancelable: true,
        });
        
        // Touch events need different handling if they are TouchEvents
        if (e.type.startsWith('touch')) {
            const touchEvent = new TouchEvent(e.type, {
                touches: e.touches,
                targetTouches: e.targetTouches,
                changedTouches: e.changedTouches,
                bubbles: true,
                cancelable: true,
            });
            canvas.dispatchEvent(touchEvent);
        } else {
            canvas.dispatchEvent(clonedEvent);
        }
      };

      window.addEventListener('mousemove', forwardEvent);
      window.addEventListener('mousedown', forwardEvent);
      window.addEventListener('mouseup', forwardEvent);
      window.addEventListener('touchstart', forwardEvent, {passive: true});
      window.addEventListener('touchmove', forwardEvent, {passive: true});
      window.addEventListener('touchend', forwardEvent);

      return () => {
        window.removeEventListener('mousemove', forwardEvent);
        window.removeEventListener('mousedown', forwardEvent);
        window.removeEventListener('mouseup', forwardEvent);
        window.removeEventListener('touchstart', forwardEvent);
        window.removeEventListener('touchmove', forwardEvent);
        window.removeEventListener('touchend', forwardEvent);
        
        // Cleanup canvas if webgl-fluid has a destroy method, wait there's none documented easily.
        // But removing listeners is good enough.
      };
    }
  }, [theme]);

  if (theme !== 'dark') return null;

  return (
    <canvas ref={canvasRef} className={styles.globalFluidCanvas} />
  );
}
