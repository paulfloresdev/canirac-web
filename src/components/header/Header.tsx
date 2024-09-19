import React, { useState, useEffect } from "react";
import ToggleLanguage from "./ToggleLanguage";
import NavIcon from "./NavIcon";
import Logo from "../logo/Logo";
import NavOption from "./NavOption";
import { useLanguage } from "../../context/LanguageContext";

interface HeaderProps {
    page: number;
    isMutable: boolean;
}

const Header: React.FC<HeaderProps> = ({ page, isMutable }) => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrollingUp, setScrollingUp] = useState<boolean>(true);
    const [bannerScrolled, setBannerScrolled] = useState<boolean>(false); // Color inicial azul

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
            </div>


        </header>

    );
};

export default Header;
