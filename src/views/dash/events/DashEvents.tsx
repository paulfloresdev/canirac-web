import React, { useEffect } from "react";
import { Drawer } from "../../../components/drawer/Drawer";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { EventsTab } from "./EventsTab";

const DashEvents: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigator]);

    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Drawer */}
            <Drawer page={3} />
            {/* Content */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="w-full flex flex-row justify-between items-start">
                    <span className="font-normal">Listado de eventos</span>
                </div>
                <EventsTab />
            </div>
        </div>
    );
}

export default DashEvents;