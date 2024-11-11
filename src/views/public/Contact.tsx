import React, { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/header/Header";
import MapWithMarker from "../../components/footer/MapWithMarker";
import { useFetchIndex } from "../../hooks/useFetch";
import { SocialMediaCard } from "../../components/footer/SocialMediaCard";
import { formatPhoneNumber } from "../../components/footer/Footer";

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const { data, error, isLoading, refetch } = useFetchIndex('contacts', null, language)

    const contact = data?.data[0];

    useEffect(() => {
        refetch();
    }, [language, refetch]);

    useEffect(() => {
        console.log(error);
    }, [isLoading, error]);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error:</div>;
    }

    const handleMarkerClick = () => {
        // Cambia la URL a la que deseas redirigir
        window.open("https://www.google.com/maps/dir//CANIRAC+Mariano+Abasolo,+esq.+Nayarit.+Plaza+Abasolo,+Segundo+Piso,+Local+6+Pueblo+Nuevo+23060+La+Paz,+B.C.S./@24.1467744,-110.329928,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86afd36a3ba968cd:0x5a977a06e9622585!2m2!1d-110.329928!2d24.1467744?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D", "_blank");
    };

    return (
        <>
            <div className="h-full flex flex-col bg-background dark:bg-background-dark">
                <Header page={4} isMutable={false} />
                <div className="h-20"></div>
                <div className="w-content h-2/3 mx-auto flex flex-col space-y-4">
                    <MapWithMarker lat={contact.lat} lng={contact.long} />
                    <div className="flex flex-row space-x-4">
                        <SocialMediaCard />
                        <div className="bg-accent-dark dark:bg-background-dark rounded-custom p-6 w-full lg:w-2/3 space-y-4 h-full">
                            <span className="text-selected-dark text-base lg:text-lg xl:text-lg font-normal">{language === 'es' ? 'Contacto' : 'Contact'}</span>
                            <div className="flex flex-row space-x-2 items-center">
                                <img src="/assets/icons/white/call.png" alt="" className="h-5" />
                                <span className="text-selected-dark">{formatPhoneNumber(contact.phone)}</span>
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <img src="/assets/icons/white/sms.png" alt="" className="h-5" />
                                <span className="text-selected-dark">{contact.email}</span>
                            </div>
                            <div className="flex flex-row space-x-2 items-start">
                                <img src="/assets/icons/white/location.png" alt="" className="h-5" />
                                <button onClick={handleMarkerClick} className="text-selected-dark hover:text-primary text-start">{contact.address}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
