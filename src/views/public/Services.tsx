
import React, { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useFetchIndex } from "../../hooks/useFetch";
import { Loader } from "../../components/widgets/Loader";
import { formatPhone } from "../../utils/formats";
import { useSnackbar } from "../../context/SnackbarContext";


const Services: React.FC = () => {
    const { language } = useLanguage();
    const { data, isLoading, error, refetch } = useFetchIndex('services', null, language);
    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        refetch();
    }, [language]);

    const clipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                showSnackbar('Copiado al portapapeles', 'success');
            })
            .catch(err => {
                console.error("Error al copiar el texto:", err);
            });
    };

    if (isLoading && error) {
        return <Loader />
    }

    return (
        <>
            <div className="flex flex-col min-h-screen w-full h-auto bg-background dark:bg-background-dark">
                <Header page={1} isMutable={false} />
                <div className="w-content mx-auto flex-grow mt-20 space-y-4">
                    <span className="font-normal">Listado de servicios</span>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {
                            data?.data.map((service: any) => (
                                <div key={service.id} className="flex flex-col space-y-2">
                                    <img
                                        src={service.img_path}
                                        alt={service.title_es}
                                        className="w-full h-auto object-fill rounded-custom"
                                    />
                                    <span className="font-normal">{service.title}</span>
                                    <span className="text-sm ">{service.description}</span>
                                    <span>
                                        <span className="font-normal text-sm">{`📞 Contacto: `}</span>
                                        <span className="text-sm">{service.contact_name}</span>
                                        <span
                                            className="text-primary text-sm hover:cursor-pointer"
                                            onClick={() => clipboard(service.contact_phone)}
                                        >
                                            {` ${formatPhone(service.phone)}`}
                                        </span>
                                    </span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="h-12"></div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Services;
