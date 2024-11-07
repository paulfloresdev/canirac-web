import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

interface LogoProps {
    isMutable: boolean;
    bannerScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isMutable, bannerScrolled }) => {
    const isDarkMode = useDarkMode();

    if (isMutable && !bannerScrolled) {
        return (
            <div className="flex items-center h-full"> {/* Centrar verticalmente */}
                <img src="/assets/logo/canirac-dark.png" alt="Canirac Logo" className='h-18 w-48 object-cover' />
            </div>
        );
    }

    return (
        <div className="flex items-center h-full"> {/* Centrar verticalmente */}
            {isDarkMode ? (
                <img src="/assets/logo/canirac-dark.png" alt="Canirac Logo" className='h-18 w-48 object-cover' />
            ) : (
                <img src="/assets/logo/canirac.png" alt="Canirac Logo" className='h-18 w-48 object-cover' />
            )}
        </div>
    );
};

export default Logo;
