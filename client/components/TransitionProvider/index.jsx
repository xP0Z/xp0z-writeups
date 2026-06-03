'use client';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useContext, useRef, useEffect } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Curve from '../Curve';

function FrozenRouter({ children, currentPath }) {
    const context = useContext(LayoutRouterContext);
    const frozenContext = useRef(context).current;
    
    const pathname = usePathname();
    const isExiting = pathname !== currentPath;
    const scrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!isExiting) {
                scrollY.current = window.scrollY;
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isExiting]);

    return (
        <div 
            style={isExiting ? {
                position: 'fixed',
                top: -scrollY.current,
                left: 0,
                width: '100%',
                pointerEvents: 'none'
            } : {}}
        >
            <LayoutRouterContext.Provider value={frozenContext}>
                {children}
            </LayoutRouterContext.Provider>
        </div>
    );
}

export default function TransitionProvider({ children }) {
    const pathname = usePathname();
    const prevPathname = useRef(pathname);
    const hasNavigated = useRef(false);

    if (prevPathname.current !== pathname) {
        hasNavigated.current = true;
        prevPathname.current = pathname;
    }

    return (
        <AnimatePresence mode="wait">
            <Curve key={pathname} isInitialLoad={!hasNavigated.current}>
                <FrozenRouter currentPath={pathname}>
                    {children}
                </FrozenRouter>
            </Curve>
        </AnimatePresence>
    )
}
