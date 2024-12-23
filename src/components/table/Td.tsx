import React from "react";

interface TdProps {
    children?: React.ReactNode;
}

export const Td: React.FC<TdProps> = ({ children }) => {
    return (
        <div className="w-full bg-background dark:bg-background-dark py-1 flex flex-row text-start px-4 space-x-2 border-t-2 border-border dark:border-border-dark items-center">{children}</div>
    );
}