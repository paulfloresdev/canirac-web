import React, { useEffect } from "react";
import { Drawer } from "../../../components/drawer/Drawer";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ServicesTab } from "./ServicesTab";

const DashServices: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigator]);

    const handleAdd = () => {
        navigate('/admin/eventos/agregar')
    }

    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Drawer */}
            <Drawer page={2} />
            {/* Content */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="w-full flex flex-row justify-between items-start">
                    <span className="font-normal">Listado de servicios</span>
                    <button onClick={handleAdd} className="w-auto h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                        Agregar +
                    </button>
                </div>
                <ServicesTab />
            </div>
        </div>
    );
}

export default DashServices;