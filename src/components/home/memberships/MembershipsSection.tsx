import React, { useEffect } from "react";
import InsuranceLabel from "./InsuranceLabel";
import { useLanguage } from "../../../context/LanguageContext";
import { useFetchIndex } from "../../../hooks/useFetch";
import PriceCard from "./PriceCard";

const MembershipSection: React.FC = () => {
    const { language } = useLanguage();
    const { data, error, isLoading, refetch } = useFetchIndex('memberships', null, language);

    useEffect(() => {
        refetch();
    }, [language, refetch]);

    return <div className={`w-full py-6 lg:py-8 xl:py-8 ${isLoading || error ? 'bg-accent dark:bg-accent-dark' : 'bg-custom-gradient dark:bg-custom-gradient-dark'} space-y-4`}>
        <InsuranceLabel />
        <div className="w-content flex flex-col lg:flex-row xl:flex-row space-y-4 lg:space-y-0 xl:space-y-0 lg:space-x-4 xl:space-x-8 justify-center items-center mx-auto">
            {
                isLoading || error ?
                    <>
                        <div className="w-full lg:w-card xl:w-card h-card bg-background dark:bg-background-dark rounded-custom p-6"></div>
                        <div className="w-full lg:w-card xl:w-card h-card bg-background dark:bg-background-dark rounded-custom p-6"></div>
                        <div className="w-full lg:w-card xl:w-card h-card bg-background dark:bg-background-dark rounded-custom p-6"></div>
                    </>
                    :
                    data?.data.map((membership: any) => {
                        return (
                            <PriceCard
                                key={membership.id}
                                membership={membership}
                            />
                        );
                    })

            }
        </div>
        <div className="w-content mx-auto flex flex-col space-y-2 items-center">
            <button className="border-2 border-selected-dark rounded-custom p-2">
                <span className="text-selected-dark font-normal">{language === 'es' ? 'Más información' : 'More information'}</span>
            </button>
        </div>
    </div>
};

export default MembershipSection;