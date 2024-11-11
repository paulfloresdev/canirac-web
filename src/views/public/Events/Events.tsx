import React, { useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import Header from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { useFetchIndex } from "../../../hooks/useFetch";
import { Loader } from "../../../components/widgets/Loader";
import Carousel from "../../../components/widgets/Carousel";
import { useNavigate } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint"; // Asegúrate de importar el hook

const Events: React.FC = () => {
    const { language } = useLanguage();
    const formData = new FormData();
    formData.append('filter', 'upcoming');
    const { data, isLoading, error, refetch } = useFetchIndex('events', formData, language);
    const navigate = useNavigate();
    const breakpoint = useBreakpoint(); // Obtener el breakpoint actual

    useEffect(() => {
        refetch();
    }, [language]);

    const handleDetail = (event: any) => {
        navigate('/eventos/detalle', { state: { event } });
    }

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

    // Verifica si data existe y tiene eventos
    const events = data?.data;
    if (!events || events.length === 0) {
        return (
            <div className="text-center text-gray-500">
                No hay eventos disponibles en este momento.
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col min-h-screen w-full h-auto bg-background dark:bg-background-dark">
                <Header page={2} isMutable={false} />

                {/* Mostrar Carousel en pantallas grandes y lista en pantallas pequeñas */}
                <div className="w-content mx-auto mt-20 space-y-4 mb-12">
                    <span className="font-normal">Listado de eventos</span>
                    {breakpoint === 'sm' || breakpoint === 'xs' ? (
                        // En pantallas pequeñas, mostrar la lista de eventos
                        <div className="w-full space-y-4">
                            {events.map((event: any) => (
                                <div
                                    key={event.id}
                                    onClick={() => handleDetail(event)}
                                    className="rounded-custom cursor-pointer"
                                >
                                    <img
                                        src={event.img_path}
                                        alt={event.title}
                                        className="w-full h-auto rounded-custom"
                                    />

                                </div>
                            ))}
                        </div>
                    ) : (
                        // En pantallas grandes, mostrar el Carousel
                        <Carousel>
                            {events.map((event: any) => (
                                <div
                                    key={event.id}
                                    onClick={() => handleDetail(event)}
                                    className="rounded-custom cursor-pointer"
                                >
                                    <img
                                        src={event.img_path}
                                        alt={event.title}
                                        className="w-content h-banner-mob lg:h-banner mx-auto rounded-custom"
                                    />
                                    <div className="h-8"></div>
                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Events;
