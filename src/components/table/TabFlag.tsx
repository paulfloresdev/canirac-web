import React from "react";

interface TabFlagProps {
    lang: string
}

export const TabFlag: React.FC<TabFlagProps> = ({ lang }) => {
    return (
        <img src={`/public/assets/icons/${lang}.png`} alt="" className="h-4 object-contain" />
    );
}