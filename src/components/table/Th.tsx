import React from "react";

interface ThProps {
    children?: React.ReactNode;
}

export const Th: React.FC<ThProps> = ({ children }) => {
    return (
        <div className="bg-accent dark:bg-accent-dark py-2 flex flex-row text-start font-normal px-4 text-option">{children}</div>
    );
}