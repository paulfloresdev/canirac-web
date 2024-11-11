import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface CalendarPageProps {
    date: string; // Ejemplo de formato de fecha: "2024-11-10"
}

const CalendarPage: React.FC<CalendarPageProps> = ({ date }) => {
    const { language } = useLanguage();
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = parseInt(date.slice(8, 10), 10); // Esto elimina el 0 inicial si lo hay

    // Convierte el número del mes a su abreviatura en el idioma
    const monthName = new Date(`${year}-${parseInt(month)}-01`).toLocaleString(language, { month: 'short' }).toLocaleUpperCase();


    return (
        <div className="hidden lg:block w-36 h-36 bg-accent dark:bg-accent-dark rounded-custom flex-col">
            <span className="w-full h-1/4 bg-primary rounded-t-custom flex items-center justify-center font-normal text-background">
                {year}
            </span>
            <div className="w-full h-3/4 flex flex-col space-y-1 justify-center items-center">
                <span className="text-5xl font-bold">{day}</span>
                <span className="font-bold text-primary">{monthName}</span>
            </div>
        </div>

    );
};

export default CalendarPage;
