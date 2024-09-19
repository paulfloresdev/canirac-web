import React from "react";

import Header from "../../components/header/Header";
import HomeVideo from "../../components/home/video/HomeVideo";
import ToggleLanguage from "../../components/header/ToggleLanguage";

const Home: React.FC = () => {
    return <>

        <div className="w-full h-auto bg-background dark:bg-background-dark">
            <Header page={0} isMutable={true} />
            <HomeVideo />
            <div className="h-64 w-full bg-red-400">ass</div>
            <div className="h-64 w-full bg-red-400">ass</div>
            <div className="h-64 w-full bg-red-400">ass</div>
            <div className="h-64 w-full bg-red-400">ass</div>
            <div className="h-64 w-full bg-red-400">ass</div>
            <div className="h-64 w-full bg-red-400">ass</div>
            <div className="h-64 w-full bg-red-400">ass</div>
        </div>



    </>
};

export default Home;