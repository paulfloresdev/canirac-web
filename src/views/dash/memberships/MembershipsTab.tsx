import React from "react";
import { Th } from "../../../components/table/Th";
import { Td } from "../../../components/table/Td";
import { useFetchIndexDash } from "../../../hooks/useFetch";
import { Loader } from "../../../components/widgets/Loader";
import { TabFlag } from "../../../components/table/TabFlag";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useSnackbar } from "../../../context/SnackbarContext";
import { fetchDestroy } from "../../../api/fetch";


export const MembershipsTab: React.FC = () => {
    const { data, isLoading, error, refetch } = useFetchIndexDash('memberships', null);
    const navigate = useNavigate();
    const { token } = useAuth();
    const { showSnackbar } = useSnackbar();

    if (isLoading && error) {
        return <Loader />
    }

    const handleEdit = (membership: any) => {
        navigate('/admin/membresias/editar', { state: { membership } })
    }

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
            await fetchDestroy('memberships', id, token)
            showSnackbar('Membresía eliminada correctamente.', 'success');
            refetch(); // Refetch membership data to update the table
        } catch (error) {
            showSnackbar('Ocurrió un error al borrar los datos.', 'error');
        }
    };

    return (
        <div className="rounded-custom border-border dark:border-border-dark border-2 overflow-hidden">
            {/* Header */}
            <Th>
                <div className="w-2/12 flex flex-row space-x-2 items-center">
                    <span>Tamaño</span>
                    <TabFlag lang="es" />
                </div>
                <div className="w-3/12 flex flex-row space-x-2 items-center">
                    <span>Descripción</span>
                    <TabFlag lang="es" />
                </div>
                <div className="w-2/12 flex flex-row space-x-2 items-center">
                    <span>Tamaño</span>
                    <TabFlag lang="en" />
                </div>
                <div className="w-3/12 flex flex-row space-x-2 items-center">
                    <span>Descripción</span>
                    <TabFlag lang="en" />
                </div>
                <span className="w-2/12 text-center">{'Acciones'}</span>
            </Th>
            {/* Rows */}
            <div className="flex flex-col">
                {
                    data?.data.map((membership: any) => {
                        return <Td>
                            <span className="w-2/12">{membership.size_es}</span>
                            <span className="w-3/12">{membership.description_es}</span>
                            <span className="w-2/12">{membership.size_en}</span>
                            <span className="w-3/12">{membership.description_en}</span>
                            <div className="w-2/12 flex flex-row space-x-2 justify-center">
                                <button onClick={() => handleEdit(membership)} className="w-1/2 bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                                    Editar
                                </button>
                                <button onClick={() => handleDelete(membership.id)} className="w-1/2 bg-red-600 hover:bg-red-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                                    Eliminar
                                </button>
                            </div>
                        </Td>
                    })
                }

            </div>
        </div>
    );
}