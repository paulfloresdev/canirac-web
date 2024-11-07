import React, { useEffect } from "react";
import { useFetchIndex } from "../../hooks/useFetch";
import { useLanguage } from "../../context/LanguageContext";
import { SocialMediaCard } from "./SocialMediaCard";
import MapWithMarker from "./MapWithMarker";

export const Footer: React.FC = () => {
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



    return <footer className="mt-auto bg-background-dark dark:bg-background-deep text-white py-6 lg:py-8 xl:py-8">
        <div className="w-content mx-auto flex flex-col lg:flex-row xl:flex-row space-y-4 lg:space-x-4 xl:space-x-4 lg:space-y-0 xl:space-y-0 items-start justify-start align-top">
            <SocialMediaCard />
            <div className="bg-accent-dark dark:bg-background-dark rounded-custom p-6 w-full lg:w-1/3 xl:w-1/3 space-y-4 h-full">
                <span className="text-selected-dark text-base lg:text-lg xl:text-lg font-normal">{language === 'es' ? 'Contacto' : 'Contact'}</span>
                <div className="flex flex-row space-x-2 items-center">
                    <img src="/public/assets/icons/white/call.png" alt="" className="h-5" />
                    <span className="text-selected-dark">{formatPhoneNumber(contact.phone)}</span>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <img src="/public/assets/icons/white/sms.png" alt="" className="h-5" />
                    <span className="text-selected-dark">{contact.email}</span>
                </div>
                <div className="flex flex-row space-x-2 items-start">
                    <img src="/public/assets/icons/white/location.png" alt="" className="h-5" />
                    <button onClick={handleMarkerClick} className="text-selected-dark hover:text-primary text-start">{contact.address}</button>
                </div>
            </div>
            <MapWithMarker lat={contact.lat} lng={contact.long} />
        </div>
        <div className="w-content text-center mt-8 mx-auto"><span>© 2024 CANIRAC La Paz. Todos los derechos reservados.</span></div>

    </footer>
};

const formatPhoneNumber = (phoneNumber: string) => {
    // Verifica que el número tenga 10 caracteres y que solo contenga dígitos
    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
        throw new Error("El número de teléfono debe tener 10 dígitos.");
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`;
};
