import React from "react";
import { Th } from "../../../components/table/Th";
import { Td } from "../../../components/table/Td";
import { useFetchIndex } from "../../../hooks/useFetch";
import { Loader } from "../../../components/widgets/Loader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useSnackbar } from "../../../context/SnackbarContext";
import { fetchDestroy } from "../../../api/fetch";

export const SocialMediasTab: React.FC = () => {
    const { data, isLoading, error, refetch } = useFetchIndex('social-medias', null, '');
    const navigate = useNavigate();
    const { token } = useAuth();
    const { showSnackbar } = useSnackbar();

    if (isLoading && error) {
        return <Loader />
    }

    const handleEdit = (socialmedia: any) => {
        navigate('/admin/redes-sociales/editar', { state: { socialmedia } })
    }

    const handleUrl = (url: string) => {
        // Cambia la URL a la que deseas redirigir
        window.open(url, "_blank");
    };
    const handleDelete = async (id: number) => {
        if (!token) {
            showSnackbar('Error de autenticación.', 'error');
            navigate('/admin/login');
            return;
        }

        const confirmed = window.confirm('¿Estás seguro de que quieres eliminar esta membresía?');
        if (!confirmed) {
            return;
        }

        try {
            await fetchDestroy('social-medias', id, token)
            showSnackbar('Red social eliminada correctamente.', 'success');
            refetch(); // Refetch membership data to update the table
        } catch (error) {
            showSnackbar('Ocurrió un error al borrar los datos.', 'error');
        }
    };

    return (
        <div className="rounded-custom border-border dark:border-border-dark border-2 overflow-hidden">
            {/* Header */}
            <Th>
                <span className="w-3/12">Red Social</span>
                <span className="w-7/12">Vínculo</span>
                <span className="w-2/12 text-center">Acciones</span>
            </Th>
            {/* Rows */}
            <div className="flex flex-col text-sm">
                {
                    data?.data.map((socialmedia: any) => {
                        return <Td key={socialmedia.id}>
                            <div className="w-3/12 flex flex-row space-x-2 items-center">
                                <img src={`/public/assets/icons/white/${socialmedia.type}.png`} alt="" className="h-5" />
                                <span>{socialmedia.label}</span>
                            </div>
                            <button onClick={() => handleUrl(socialmedia.url)} className="w-7/12 text-selected-dark hover:text-primary text-start">{socialmedia.url}</button>
                            <div className="w-2/12 flex flex-row space-x-2 items-center justify-center">
                                <button onClick={() => handleEdit(socialmedia)} className="w-1/2 bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                                    Editar
                                </button>
                                <button onClick={() => handleDelete(socialmedia.id)} className="w-1/2 bg-red-600 hover:bg-red-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                                    Eliminar
                                </button>
                            </div>

                        </Td>
                    })
                }

            </div>
        </div >
    );
}