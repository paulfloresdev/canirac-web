
import React, { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useFetchIndex } from "../../hooks/useFetch";
import { Loader } from "../../components/widgets/Loader";
import { formatPhone } from "../../utils/formats";
import { useSnackbar } from "../../context/SnackbarContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Services: React.FC = () => {
    const { language } = useLanguage();
    const { data, isLoading, error, refetch } = useFetchIndex('services', null, language);
    const { showSnackbar } = useSnackbar();
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

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
                    <Carousel responsive={responsive}>
                    {
                        data ?
                            data.data.length > 0 ?
                                data.data.map((service: any) => (
                                    <div key={service.id} className="flex flex-col space-y-2 mx-3">
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
                            :
                                <Loader/>
                        :   
                            <div></div>
                    }
                    </Carousel>
                    <div className="h-12"></div>
                </div>
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Services;
