import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { ScaleLoader } from "react-spinners";

export const Loader: React.FC = () => {
    const isDarkMode = useDarkMode();

    return <div className="flex items-center justify-center min-h-screen">
        {
            isDarkMode ? <ScaleLoader color="#3C3C41" /> : <ScaleLoader color="#F1F1F3" />
        }
    </div>
}