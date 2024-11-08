
import React, { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useFetchIndex } from "../../hooks/useFetch";
import { Loader } from "../../components/widgets/Loader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { formatCurrency } from "../../utils/formats";


const Events: React.FC = () => {
    const { language } = useLanguage();
    const { data, isLoading, error, refetch } = useFetchIndex('events', null, language);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    useEffect(() => {
        refetch();
    }, [language]);

    if (isLoading && error) {
        return <Loader />
    }

    return (
        <>
            <div className="flex flex-col min-h-screen w-full h-auto bg-background dark:bg-background-dark">
                <Header page={2} isMutable={false} />
                <div className="w-content mx-auto flex-grow mt-20 space-y-4">
                    <span className="font-normal">Listado de servicios</span>
                    <Carousel responsive={responsive}>
                    {
                        data ?
                            data.data.length > 0 ?
                                data.data.map((event: any) => (
                                    <div key={event.id} className=" flex flex-col space-y-2 mx-0.5">
                                        <img
                                                src={event.img_path}
                                                alt={event.title}
                                                className="w-full h-auto object-fill rounded-custom"
                                            />
                                        <span className="font-normal">{event.title}</span>
                                        <span className="font-black text-primary">{formatCurrency(event.price)}</span>
                                        <span className="text-sm ">{event.description}</span>
                                        <div className="flex flex-row">
                                            <span className="text-sm ">{event.date}</span>
                                        </div>
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

export default Events;
