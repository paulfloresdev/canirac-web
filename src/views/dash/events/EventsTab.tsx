import React from "react";
import { Th } from "../../../components/table/Th";
import { Td } from "../../../components/table/Td";
import { useFetchIndexDash } from "../../../hooks/useFetch";
import { Loader } from "../../../components/widgets/Loader";
import { TabFlag } from "../../../components/table/TabFlag";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils/formats";
import { useAuth } from "../../../context/AuthContext";
import { useSnackbar } from "../../../context/SnackbarContext";
import { fetchDestroy } from "../../../api/fetch";

export const EventsTab: React.FC = () => {
    const { data, isLoading, error, refetch } = useFetchIndexDash('events', null);
    const navigate = useNavigate();
    const { token } = useAuth();
    const { showSnackbar } = useSnackbar();

    if (isLoading && error) {
        return <Loader />
    }

    const handleEdit = (event: any) => {
        navigate('/admin/eventos/editar', { state: { event } })
    }

    const handleDelete = async (id: number) => {
        if (!token) {
            showSnackbar('Error de autenticación.', 'error');
            navigate('/admin/login');
            return;
        }

        const confirmed = window.confirm('¿Estás seguro de que quieres eliminar este evento?');
        if (!confirmed) {
            return;
        }

        try {
            await fetchDestroy('events', id, token)
            showSnackbar('Evento eliminado correctamente.', 'success');
            refetch(); // Refetch membership data to update the table
        } catch (error) {
            showSnackbar('Ocurrió un error al borrar los datos.', 'error');
        }
    };

    return (
        <div className="rounded-custom border-border dark:border-border-dark border-2 overflow-hidden">
            {/* Header */}
            <Th>
                <div className="w-3/12 flex flex-row space-x-2 items-center">
                    <span>Titulo</span>
                    <TabFlag lang="es" />
                </div>
                <div className="w-3/12 flex flex-row space-x-2 items-center">
                    <span>Titulo</span>
                    <TabFlag lang="en" />
                </div>
                <span className="w-2/12 text-center">Fecha y hora</span>
                <span className="w-2/12 text-center">Precio</span>
                <span className="w-2/12 text-center">Acciones</span>
            </Th>
            {/* Rows */}
            <div className="flex flex-col text-sm">
                {
                    data?.data.map((event: any) => {
                        return <Td key={event.id}>
                            <span className="w-3/12">{event.title_es}</span>
                            <span className="w-3/12">{event.title_en}</span>
                            <span className="w-2/12 text-center">{`${event.date.slice(0, 10)} ${event.time}`}</span>
                            <span className="w-2/12 text-center">{formatCurrency(event.price)}</span>
                            <div className="w-2/12 flex flex-row items-center space-x-2">
                                <button onClick={() => handleEdit(event)} className="w-full bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto">
                                    Editar
                                </button>
                                <button onClick={() => handleDelete(event.id)} className="w-full bg-red-600 hover:bg-red-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
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