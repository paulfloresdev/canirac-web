import React, { useEffect } from "react";
import { Drawer } from "../../../components/drawer/Drawer";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { SocialMediasTab } from "./SocialMediaTab";

const DashSocialMedias: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigator]);

    const handleAdd = () => {
        navigate('/admin/redes-sociales/agregar')
    }

    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Drawer */}
            <Drawer page={6} />
            {/* Content */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="w-full flex flex-row justify-between items-start">
                    <div className="w-full flex flex-row justify-between items-start">
                        <span className="font-normal">Listado de redes sociales</span>
                        <button onClick={handleAdd} className="w-1/12 h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                            Agregar +
                        </button>
                    </div>
                </div>
                <SocialMediasTab />
            </div>
        </div>
    );
}

export default DashSocialMedias;