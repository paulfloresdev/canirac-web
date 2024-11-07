import React, { useEffect, useState } from "react";
import { useFetchShow } from "../../../hooks/useFetch";
import { useLanguage } from "../../../context/LanguageContext";

const InsuranceLabel: React.FC = () => {
    const { language } = useLanguage();
    const { data, isLoading, error } = useFetchShow('labels', 1, language);
    const [label, setLabel] = useState<string>('');

    useEffect(() => {
        if (data && data.data) {
            setLabel(data.data.text);  // Actualiza el label cuando data esté disponible
        }
    }, [data]);

    return <>
        <div className="w-content mx-auto flex flex-col items-center">
            {isLoading || error ?
                <>
                    <div className="w-1/6 h-5 mb-4 bg-background dark:bg-background-dark rounded-md"></div>
                    <div className="w-1/3 h-5 mb-4  bg-background dark:bg-background-dark rounded-md"></div>
                </>
                : <>
                    <span className="text-selected-dark text-base lg:text-lg xl:text-lg font-normal">{language === 'es' ? 'Tarifas de afiliación' : 'Membership Fees'}</span>
                    {language === 'es' ?
                        <span className="text-center mt-1 text-white">Nuestra tarifas incluyen <b className="font-medium">seguro gratuito</b> contra siniestros de hasta {label}.</span> :
                        <span className="text-center mt-1 text-white">Our fees include <b className="font-medium">free insurance</b> against incidents of up to {label}.</span>
                    }
                </>}

        </div>

    </>
}

export default InsuranceLabel;