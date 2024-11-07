import React from "react";
import { formatCurrency } from "../../../formats/formats";
import { useLanguage } from "../../../context/LanguageContext";

interface PriceCardProps {
    membership: any
}

const PriceCard: React.FC<PriceCardProps> = ({ membership }) => {
    const { language } = useLanguage();

    return (
        <div className="w-full lg:w-card xl:w-card h-card bg-accent dark:bg-accent-dark rounded-custom p-6">
            <div className="flex flex-col items-center justify-start h-20">
                <span className="text-xs lg:text-sm xl:text-sm text-primary font-black">{membership.size}</span>
                <span className="text-base lg:text-lg xl:text-lg text-selected dark:text-selected-dark font-normal text-center">{membership.description}</span>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-6">
                <span className="">{language === 'es' ? 'Sin alcohol' : 'Non-alcoholic'}</span>
                <span className="font-medium">{formatCurrency(parseFloat(membership.price1))}</span>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-6">
                <span className="">{language === 'es' ? 'Cervezas y vinos' : 'Beers and wines'}</span>
                <span className="font-medium">{formatCurrency(parseFloat(membership.price2))}</span>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-6">
                <span className="">{language === 'es' ? 'Licores' : 'Liquors'}</span>
                <span className="font-medium">{formatCurrency(parseFloat(membership.price3))}</span>
            </div>



        </div>
    );
};

export default PriceCard;
