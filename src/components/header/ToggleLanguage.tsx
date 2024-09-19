import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import NavIcon from "./NavIcon";

interface ToggleLanguageProps {
    isMutable: boolean;
    bannerScrolled: boolean;
}

const ToggleLanguage: React.FC<ToggleLanguageProps> = ({ isMutable, bannerScrolled }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={`bg-accent dark:bg-accent-dark ${(isMutable && !bannerScrolled) ? 'bg-opacity-40 dark:bg-opacity-40' : 'bg-opacity-100 dark:bg-opacity-100'} p-3 rounded-custom flex flex-row space-x-2 items-center`}
            style={{ width: 'auto', height: 'auto' }} // Añadido para asegurar el tamaño adecuado
        >
            <img
                src={`/public/assets/icons/${language}.png`}
                className="h-6 object-contain"
                alt="Language Icon"
                style={{ maxWidth: '100%', maxHeight: '100%' }} // Limita el tamaño máximo
            />
            <span className={`text-sm font-medium ${isMutable ? bannerScrolled ? '' : 'text-selected-dark' : ''}`}>
                {language.toUpperCase()}
            </span>
            <NavIcon
                name="toggle"
                isMutable={isMutable}
                bannerScrolled={bannerScrolled}
                isSelected={true}
            />
        </button>
    );
};

export default ToggleLanguage;
