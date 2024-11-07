import React, { useEffect, useState } from "react";
import { Drawer } from "../../../components/drawer/Drawer";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MembershipsTab } from "./MembershipsTab";
import { useFetchIndex } from "../../../hooks/useFetch";
import Input from "../../../components/widgets/Input";
import { useSnackbar } from "../../../context/SnackbarContext";
import { fetchUpdate } from "../../../api/fetch";

const DashMembership: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const { data } = useFetchIndex('labels', null, '')
    const [insurance, setInsurance] = useState<string>('');
    const [validation1, setValidation1] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigator]);

    useEffect(() => {
        if (data && data.data) {
            setInsurance(data.data[0].text)
        }
    }, [data]);

    const handleAdd = () => {
        navigate('/admin/membresias/agregar')
    }

    const handleUpdate = async (event: React.FormEvent) => {
        event.preventDefault();

        const isValidation1 = insurance === '';
        setValidation1(isValidation1);

        if (!isValidation1) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('/admin/login');
                return;
            }

            setIsSubmitting(true);
            try {

                const apiLabel = JSON.stringify({
                    "text": insurance
                });

                await fetchUpdate('labels', 1, apiLabel, token);

                showSnackbar('Cobertura del seguro actualizada correctamente.', 'success');
                navigate('/admin/membresias')
            } catch (error) {
                showSnackbar('Ocurrió un error al guardar los datos.', 'error');
            } finally {
                setIsSubmitting(false);
            }
        }
    }

    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Drawer */}
            <Drawer page={1} />
            {/* Content */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="w-full flex flex-row justify-between items-start">
                    <span className="font-normal">Listado de tarifas de afiliación</span>
                    <button onClick={handleAdd} className="w-1/12 h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                        Agregar +
                    </button>
                </div>
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col space-y-1">
                        <span className="mb-1 text-selected dark:text-selected-dark">Cobertura del seguro</span>
                        <div className="w-1/4 flex flex-row space-x-2 items-start">
                            {
                                <div className="w-2/3">
                                    <Input
                                        type="text"
                                        label=""
                                        value={insurance}
                                        setValue={setInsurance}
                                        regExp={/^[a-zA-Z0-9.,$ ]*$/}
                                        maxLength={128}
                                        noLabel={true}
                                        status={validation1}
                                    />
                                </div>
                            }
                            <button type="submit" className="w-1/3 h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                                {isSubmitting ? 'Guardando...' : 'Guardar'}
                            </button>
                        </div>
                    </div>
                </form>
                <MembershipsTab />
            </div>
        </div>
    );
}

export default DashMembership;