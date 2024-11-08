import React from "react";
import { DrawerOption } from "./DrawerOption";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface DrawerProps {
    page: number;
}

export const Drawer: React.FC<DrawerProps> = ({ page }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        console.log("Logout button clicked"); // Añadir este log para verificar que se hace clic en el botón
        await logout();
        console.log("Logged out"); // Añadir este log para verificar que se ha cerrado la sesión
        navigate('/admin/login');
    };

    return (
        <div className="lg:w-72 xl:w-72 h-full lg:h-screen sticky top-0 bg-background-dark shadow-md px-4 py-6 flex flex-col justify-between">
            <div className="flex flex-col space-y-2">
                <img src="/assets/logo/canirac-dark.png" alt="Canirac Logo" className='h-auto w-5/6 object-cover mx-auto mb-12' />
                <DrawerOption path="/admin/" label="Solicitudes de afiliación" isSelected={page === 0} />
                <DrawerOption path="/admin/membresias" label="Tarifas de afiliación" isSelected={page === 1} />
                <DrawerOption path="/admin/servicios" label="Servicios" isSelected={page === 2} />
                <DrawerOption path="/admin/eventos" label="Eventos" isSelected={page === 3} />
                <DrawerOption path="/admin/camara" label="Miembros de la cámara" isSelected={page === 4} />
                <DrawerOption path="/admin/contacto" label="Contacto" isSelected={page === 5} />
                <DrawerOption path="/admin/redes-sociales" label="Redes Sociales" isSelected={page === 6} />
                <DrawerOption path="/admin/video" label="Video" isSelected={page === 7} />
            </div>
            <div onClick={handleLogout} className="w-full rounded-custom px-4 py-2 text-center bg-accent-dark hover:bg-red-600 text-red-600 hover:text-selected-dark font-normal">Cerrar sesión</div>
        </div>
    );
}