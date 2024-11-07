import React from "react";
import { Th } from "../../../components/table/Th";
import { Td } from "../../../components/table/Td";
import { useFetchIndexDash } from "../../../hooks/useFetch";
import { Loader } from "../../../components/widgets/Loader";
import { TabFlag } from "../../../components/table/TabFlag";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../formats/formats";

export const EventsTab: React.FC = () => {
    const { data, isLoading, error } = useFetchIndexDash('events', null);
    const navigate = useNavigate();

    if (isLoading && error) {
        return <Loader />
    }

    const handleEdit = (event: any) => {
        navigate('/admin/eventos/editar', { state: { event } })
    }

    return (
        <div className="rounded-custom border-border dark:border-border-dark border-2 overflow-hidden">
            {/* Header */}
            <Th>
                <span className="w-24">Imagen</span>
                <div className="w-4/12 flex flex-row space-x-2 items-start ml-6 mr-2">
                    <span>Titulo</span>
                    <TabFlag lang="es" />
                </div>
                <div className="w-4/12 flex flex-row space-x-2 items-start mx-2">
                    <span>Titulo</span>
                    <TabFlag lang="en" />
                </div>
                <span className="w-2/12 text-center">Precio</span>
                <span className="w-2/12 text-center">Acciones</span>
            </Th>
            {/* Rows */}
            <div className="flex flex-col">
                {
                    data?.data.map((event: any) => {
                        return <Td key={event.id}>
                            {!event.img_path ?
                                <div className="w-24 h-28 bg-accent dark:bg-accent-dark border-solid flex items-center justify-center mx-start rounded-sm">
                                    <span className="font-medium text-primary">SN</span>
                                </div>

                                : <div className="w-24 h-28">
                                    <img
                                        src={event.img_path}
                                        alt={event.initials}
                                        className="w-full h-full object-cover bg-body dark:bg-body-dark border-solid rounded-sm"
                                    />
                                </div>
                            }
                            <span className="w-4/12 ml-6 mr-2">{event.title_es}</span>
                            <span className="w-4/12 mx-2">{event.title_en}</span>
                            <span className="w-2/12 mx-2 text-center">{formatCurrency(event.price)}</span>
                            <div className="w-2/12 flex flex-row items-center">
                                <button onClick={() => handleEdit(event)} className="bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto">
                                    Editar
                                </button>
                            </div>

                        </Td>
                    })
                }

            </div>
        </div >
    );
}