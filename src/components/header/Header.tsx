import React, { useState, useEffect } from "react";
import ToggleLanguage from "./ToggleLanguage";
import Logo from "../logo/Logo";
import NavOption from "./NavOption";
import { useLanguage } from "../../context/LanguageContext";

interface HeaderProps {
    page: number;
    isMutable: boolean;
}

const Header: React.FC<HeaderProps> = ({ page, isMutable }) => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
    const [scrollingUp, setScrollingUp] = useState<boolean>(true);
    const [bannerScrolled, setBannerScrolled] = useState<boolean>(false); // Color inicial azul
    const [buttonColor, setButtonColor] = useState<string>(isMutable ? 'text-selected-dark border-selected-dark dark:text-selected-dark dark:border-selected-dark' : '');

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Cambia el color del header basado en el scroll
            setBannerScrolled(scrollTop >= viewportHeight);

            // Mostrar u ocultar el header basado en la dirección del scroll
            if (scrollTop > lastScrollTop) {
                setScrollingUp(false);
            } else {
                setScrollingUp(true);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para que no sea negativo

            if (isMutable) {
                if (bannerScrolled) {
                    setButtonColor('text-option border-option dark:text-option dark:border-option');
                } else {
                    setButtonColor('text-selected-dark border-selected-dark dark:text-selected-dark dark:border-selected-dark');
                }
            } else {
                setButtonColor('text-option border-option dark:text-option dark:border-option');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header
            className={`fixed top-0 left-0 w-full transition-transform z-50 ${scrollingUp ? 'translate-y-0' : '-translate-y-full'} bg-background dark:bg-background-dark ${isMutable ? (bannerScrolled ? 'bg-opacity-100 dark:bg-opacity-100' : 'bg-opacity-0 dark:bg-opacity-0') : ''} p-2`}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between h-16">
                <Logo isMutable={isMutable} bannerScrolled={bannerScrolled} />

                {/* Menu Items (Desktop) */}
                <nav className="hidden lg:flex lg:items-center lg:space-x-6">
                    <NavOption
                        isMutable={isMutable}
                        bannerScrolled={bannerScrolled}
                        isSelected={page === 0}
                        filename="home"
                        href="/">
                        {language === 'es' ? 'Inicio' : 'Home'}
                    </NavOption>
                    <NavOption
                        isMutable={isMutable}
                        bannerScrolled={bannerScrolled}
                        isSelected={page === 1}
                        filename="services"
                        href="/servicios">
                        {language === 'es' ? 'Servicios' : 'Services'}
                    </NavOption>
                    <NavOption
                        isMutable={isMutable}
                        bannerScrolled={bannerScrolled}
                        isSelected={page === 2}
                        filename="events"
                        href="/eventos">
                        {language === 'es' ? 'Eventos' : 'Events'}
                    </NavOption>
                    <NavOption
                        isMutable={isMutable}
                        bannerScrolled={bannerScrolled}
                        isSelected={page === 3}
                        filename="join"
                        href="/afiliacion">
                        {language === 'es' ? 'Afiliación' : 'Memberships'}
                    </NavOption>
                    <NavOption
                        isMutable={isMutable}
                        bannerScrolled={bannerScrolled}
                        isSelected={page === 4}
                        filename="contact"
                        href="/contacto">
                        {language === 'es' ? 'Contacto' : 'Contact'}
                    </NavOption>
                    <div className="pl-12">
                        <ToggleLanguage isMutable={isMutable} bannerScrolled={bannerScrolled} />
                    </div>
                </nav>

                {/* Menu Button (Mobile) */}
                <button
                    className={`lg:hidden flex items-center px-3 py-2 border-2 rounded-custom ${buttonColor}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

            </div>

            {/* Menu Items (Mobile) */}
            <nav className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-background dark:bg-background-dark rounded-custom py-4 px-4 space-y-3 mx-4 shadow-2xl shadow-option dark:shadow-background-deep border-solid border-2 border-border`}>
                <NavOption
                    isMutable={false}
                    bannerScrolled={bannerScrolled}
                    isSelected={page === 0}
                    filename="home"
                    href="/">
                    {language === 'es' ? 'Inicio' : 'Home'}
                </NavOption>
                <NavOption
                    isMutable={false}
                    bannerScrolled={bannerScrolled}
                    isSelected={page === 1}
                    filename="services"
                    href="/servicios">
                    {language === 'es' ? 'Servicios' : 'Services'}
                </NavOption>
                <NavOption
                    isMutable={false}
                    bannerScrolled={bannerScrolled}
                    isSelected={page === 2}
                    filename="events"
                    href="/eventos">
                    {language === 'es' ? 'Eventos' : 'Events'}
                </NavOption>
                <NavOption
                    isMutable={false}
                    bannerScrolled={bannerScrolled}
                    isSelected={page === 3}
                    filename="join"
                    href="/afiliacion">
                    {language === 'es' ? 'Afiliación' : 'Memberships'}
                </NavOption>
                <NavOption
                    isMutable={false}
                    bannerScrolled={bannerScrolled}
                    isSelected={page === 4}
                    filename="contact"
                    href="/contacto">
                    {language === 'es' ? 'Contacto' : 'Contact'}
                </NavOption>
                <div className="w-full flex flex-row justify-center">
                    <ToggleLanguage isMutable={false} bannerScrolled={bannerScrolled} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
