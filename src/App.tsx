import React from "react";
import Providers from "./Providers.tsx";
import AppRoutes from "./routes";


const App: React.FC = () => {
    return (
        <Providers>
            <div className="w-full h-full inter-light bg-background dark:bg-background-dark text-selected dark:text-selected-dark text-sm md:text-base lg:text-base xl:text-base font-light">
                <AppRoutes />
            </div>
        </Providers>
    );
}

export default App;