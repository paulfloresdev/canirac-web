import React, { useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { useFetchIndex } from "../../../hooks/useFetch";
import { MemberCard, MemberCardPlaceholder } from "./MemberCard";

const ChamberMemberSection: React.FC = () => {
    const { language } = useLanguage();
    const { data, error, isLoading, refetch } = useFetchIndex('chamber-members', null, language);

    useEffect(() => {
        refetch(); // Vuelve a fetch los datos cuando cambia el lenguaje
    }, [language, refetch]);

    return <div className="w-content mx-auto py-6 lg:py-8 xl:py-8 space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                isLoading || error ? <>
                    <MemberCardPlaceholder />
                    <MemberCardPlaceholder />
                    <MemberCardPlaceholder />
                    <MemberCardPlaceholder />
                    <MemberCardPlaceholder />
                    <MemberCardPlaceholder />
                    <MemberCardPlaceholder />
                </> :
                    data?.data.map((member: any) => {
                        return (
                            <MemberCard
                                key={member.id}
                                member={member}
                            />
                        );
                    })
            }
        </div>
    </div>
};

export default ChamberMemberSection;