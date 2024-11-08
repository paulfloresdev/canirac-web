import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useFetchIndex } from "../../hooks/useFetch";

export const SocialMediaCard: React.FC = () => {
    const { language } = useLanguage();
    const { data, error, isLoading } = useFetchIndex('social-medias', null, language);

    const handleUrl = (url: string) => {
        // Cambia la URL a la que deseas redirigir
        window.open(url, "_blank");
    };

    return <div className="bg-accent-dark dark:bg-background-dark rounded-custom p-6 w-full lg:w-1/3 xl:w-1/3 space-y-4 h-full">
        <span className="text-selected-dark text-base lg:text-lg xl:text-lg font-normal">{language === 'es' ? 'Redes sociales' : 'Social media'}</span>
        {
            isLoading || error ? <></> :
                data?.data.map((socialmedia: any) => {
                    return <div className="flex flex-row space-x-2 items-center" key={socialmedia.id}>
                        <img src={`/assets/icons/white/${socialmedia.type}.png`} alt="" className="h-5" />
                        <button onClick={() => handleUrl(socialmedia.url)} className="text-selected-dark hover:text-primary">{socialmedia.label}</button>
                    </div>
                })
        }
    </div>
}