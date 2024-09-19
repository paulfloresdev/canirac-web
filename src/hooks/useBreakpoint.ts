import { useState, useEffect } from 'react';

// Definir los tamaños de los breakpoints de Tailwind CSS
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xs';

const getBreakpoint = (width: number): Breakpoint => {
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'sm';
};

const useBreakpoint = (): Breakpoint => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => getBreakpoint(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return breakpoint;
};

export default useBreakpoint;
