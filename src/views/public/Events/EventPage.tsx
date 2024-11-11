import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { useFetchShow } from "../../../hooks/useFetch";
import { useLanguage } from "../../../context/LanguageContext";
import { Loader } from "../../../components/widgets/Loader";
import CalendarPage from "../../../components/widgets/CalendarPage";
import { formatCurrency, formatFullDate } from "../../../utils/formats";
import { Clock } from "iconsax-react";

interface EventTagProps {
    children: React.ReactNode;
    classname?: string;
}

export const EventTag: React.FC<EventTagProps> = ({ children, classname }) => {
    return <span className={`${classname} bg-accent dark:bg-accent-dark py-1 px-4 rounded-custom inline-block`}>
        {children}
    </span>
}

const EditEvents: React.FC = () => {
    const location = useLocation();
    var { event } = location.state || {};
    const { language } = useLanguage();
    const { data, isLoading, error, refetch } = useFetchShow('events', event.id, language);

    useEffect(() => {
        refetch();
    }, [language]);

    // Muestra el Loader mientras está cargando
    if (isLoading) {
        return <Loader />
    }

    // Muestra un mensaje de error si ocurre un problema al cargar los datos
    if (error) {
        return (
            <div className="text-center text-red-500">
                Error al cargar eventos. Por favor, intenta nuevamente.
            </div>
        );
    }

    event = data?.data;

    return (
        <div className="flex flex-col min-h-screen w-full h-auto bg-background dark:bg-background-dark">
            <Header page={2} isMutable={false} />

            <div className="w-content mx-auto mt-20 flex flex-col space-y-4 mb-12">
                <img src={event.img_path} alt={event.title} className="w-full h-banner-mob lg:h-banner rounded-custom" />
                <div className="flex flex-col lg:flex-row w-full h-auto space-y-4 lg:space-y-0  lg:space-x-4">
                    <div className="w-36 flex flex-col space-y-2">
                        <CalendarPage date={event.date} />
                        <div className="hidden lg:block w-36 p-1 rounded-custom bg-accent dark:bg-accent-dark font-bold ">
                            <div className="flex flex-row space-x-2 justify-center">
                                <Clock size="24" color="#00768d" variant="Bulk" />
                                <span>{event.time}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col space-y-2">
                        <span className="font-normal inline-block">{event.title}</span>
                        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                            <div>
                                <EventTag>{event.address}</EventTag>
                            </div>
                            <div className="block lg:hidden flex-row space-x-2">
                                <EventTag>{formatFullDate(event.date, language)}</EventTag>
                                <EventTag>{event.time}</EventTag>
                            </div>

                        </div>
                        <span className="font-bold text-primary inline-block">{formatCurrency(event.price)}</span>
                        <span className="inline-block">{event.description}</span>
                    </div>

                </div>
            </div>



            {/* Footer */}
            <Footer />
        </div >
    );
};

export default EditEvents;
