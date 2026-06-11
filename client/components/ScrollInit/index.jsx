'use client';
import { useEffect } from 'react';

export default function ScrollInit() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
            
            setTimeout(() => {
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 500);
        })();
    }, []);

    return null;
}
