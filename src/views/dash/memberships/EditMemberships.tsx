import React, { useEffect, useState } from "react";
import { Drawer } from "../../../components/drawer/Drawer";
import { useAuth } from "../../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "../../../context/SnackbarContext";
import { fetchUpdate } from "../../../api/fetch";
import Input from "../../../components/widgets/Input";

const EditMemberships: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { membership } = location.state || {};
    const [id] = useState<number>(membership.id);
    const [sizeEs, setSizeEs] = useState<string>(membership.size_es);
    const [sizeEn, setSizeEn] = useState<string>(membership.size_en);
    const [descriptionEs, setDescriptionEs] = useState<string>(membership.description_es);
    const [descriptionEn, setDescriptionEn] = useState<string>(membership.description_en);
    const [price1, setPrice1] = useState<string>(membership.price1);
    const [price2, setPrice2] = useState<string>(membership.price2);
    const [price3, setPrice3] = useState<string>(membership.price3);

    const [validation1, setValidation1] = useState<boolean>(false);
    const [validation2, setValidation2] = useState<boolean>(false);
    const [validation3, setValidation3] = useState<boolean>(false);
    const [validation4, setValidation4] = useState<boolean>(false);
    const [validation5, setValidation5] = useState<boolean>(false);
    const [validation6, setValidation6] = useState<boolean>(false);
    const [validation7, setValidation7] = useState<boolean>(false);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigate]);

    if (!token) return null;

    const handleUpdate = async (event: React.FormEvent) => {
        event.preventDefault();

        const isValidation1 = sizeEs === '';
        const isValidation2 = sizeEn === '';
        const isValidation3 = descriptionEs === '';
        const isValidation4 = descriptionEn === '';
        const isValidation5 = price1 === '';
        const isValidation6 = price2 === '';
        const isValidation7 = price3 === '';

        setValidation1(isValidation1);
        setValidation2(isValidation2);
        setValidation3(isValidation3);
        setValidation4(isValidation4);
        setValidation5(isValidation5);
        setValidation6(isValidation6);
        setValidation7(isValidation7);

        if (!isValidation1 && !isValidation2 && !isValidation3 && !isValidation4 && !isValidation5 && !isValidation6 && !isValidation7) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('admin/login');
                return;
            }

            setIsSubmitting(true);
            try {

                const apiMembershipJson = JSON.stringify({
                    "size_es": sizeEs,
                    "size_en": sizeEn,
                    "description_es": descriptionEs,
                    "description_en": descriptionEn,
                    "price1": price1,
                    "price2": price2,
                    "price3": price3
                });

                await fetchUpdate('memberships', id, apiMembershipJson, token);

                showSnackbar('Membresía actualizada correctamente.', 'success');
                navigate('/admin/membresias')
            } catch (error) {
                showSnackbar('Ocurrió un error al guardar los datos.', 'error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Drawer */}
            <Drawer page={1} />
            {/* Content */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <form onSubmit={handleUpdate}>
                    <div className="bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-4">
                        <span className="font-normal">Editar tarifa de afiliación</span>
                        <div className="w-full flex flex-row space-x-2">
                            <Input
                                type="text"
                                label="Tamaño"
                                value={sizeEs}
                                setValue={setSizeEs}
                                maxLength={128}
                                status={validation1}
                                width="w-1/6"
                                flag="es"
                            />
                            <Input
                                type="text"
                                label="Descripción"
                                value={descriptionEs}
                                setValue={setDescriptionEs}
                                maxLength={128}
                                status={validation3}
                                width="w-1/3"
                                flag="es"
                            />
                            <Input
                                type="text"
                                label="Tamaño"
                                value={sizeEn}
                                setValue={setSizeEn}
                                maxLength={128}
                                status={validation2}
                                width="w-1/6"
                                flag="en"
                            />
                            <Input
                                type="text"
                                label="Descripción"
                                value={descriptionEn}
                                setValue={setDescriptionEn}
                                maxLength={128}
                                status={validation4}
                                width="w-1/3"
                                flag="en"
                            />
                        </div>
                        <div className="w-full flex flex-row space-x-2">
                            <Input
                                type="text"
                                label="Sin alcohol"
                                value={price1}
                                setValue={setPrice1}
                                regExp={/^[0-9. ]*$/}
                                maxLength={128}
                                status={validation5}
                                width="w-1/6"
                            />
                            <Input
                                type="text"
                                label="Cerveza y vinos"
                                value={price2}
                                setValue={setPrice2}
                                regExp={/^[0-9. ]*$/}
                                maxLength={128}
                                status={validation6}
                                width="w-1/6"
                            />
                            <Input
                                type="text"
                                label="Licores"
                                value={price3}
                                setValue={setPrice3}
                                regExp={/^[0-9. ]*$/}
                                maxLength={128}
                                status={validation7}
                                width="w-1/6"
                            />
                            <div className="w-1/2"></div>
                        </div>
                        <button type="submit" className="w-full h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto mt-12">
                            {isSubmitting ? 'Guardando...' : 'Guardar'}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default EditMemberships;