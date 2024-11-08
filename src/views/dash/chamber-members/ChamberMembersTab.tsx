import React from "react";
import { Th } from "../../../components/table/Th";
import { Td } from "../../../components/table/Td";
import { useFetchIndexDash } from "../../../hooks/useFetch";
import { Loader } from "../../../components/widgets/Loader";
import { TabFlag } from "../../../components/table/TabFlag";
import { useNavigate } from "react-router-dom";

export const ChamberMembersTab: React.FC = () => {
    const { data, isLoading, error } = useFetchIndexDash('chamber-members', null);
    const navigate = useNavigate();

    if (isLoading && error) {
        return <Loader />
    }

    const handleEdit = (member: any) => {
        navigate('/admin/camara/editar', { state: { member } })
    }

    return (
        <div className="rounded-custom border-border dark:border-border-dark border-2 overflow-hidden">
            {/* Header */}
            <Th>
                <span className="w-1/12 text-center">Imagen</span>
                <span className="w-4/12">Nombre</span>
                <div className="w-3/12 flex flex-row space-x-2 items-center">
                    <span>Puesto</span>
                    <TabFlag lang="es" />
                </div>
                <div className="w-3/12 flex flex-row space-x-2 items-center">
                    <span>Puesto</span>
                    <TabFlag lang="en" />
                </div>
                <span className="w-1/12 text-center">Acciones</span>
            </Th>
            {/* Rows */}
            <div className="flex flex-col text-sm">
                {
                    data?.data.map((member: any) => {
                        return <Td key={member.id}>
                            <div className="w-1/12 flex flex-col items-center">
                                {!member.img_path ?
                                    <div className="w-10 h-10 bg-accent dark:bg-accent-dark border-solid flex items-center justify-center rounded-full">
                                        <span className="font-medium text-primary">{member.initials}</span>
                                    </div>

                                    : <img
                                        src={member.img_path}
                                        alt={member.initials}
                                        className="w-10 h-10 object-cover rounded-full bg-body dark:bg-body-dark border-solid"
                                    />}
                            </div>
                            <span className="w-4/12">{member.name}</span>
                            <span className="w-3/12">{member.role_es}</span>
                            <span className="w-3/12">{member.role_en}</span>
                            <div className="w-1/12 flex flex-col items-center">
                                <button onClick={() => handleEdit(member)} className="w-full bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto">
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