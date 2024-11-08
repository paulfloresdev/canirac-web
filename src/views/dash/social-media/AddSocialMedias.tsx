import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ComboBox, { Option } from "../../../components/widgets/Combobox";
import { Drawer } from "../../../components/drawer/Drawer";
import Input from "../../../components/widgets/Input";
import { useSnackbar } from "../../../context/SnackbarContext";
import { fetchStore } from "../../../api/fetch";

const EditSocialMedias: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [type, setType] = useState<string>('');
    const [label, setLabel] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    const [validation1, setValidation1] = useState<boolean>(false);

    const options: Option[] = [
        { value: 'facebook', label: 'Facebook' },
        { value: 'instagram', label: 'Instagram' },
        { value: 'x', label: 'X' },
        { value: 'youtube', label: 'Youtube' },
    ];

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigate]);

    useEffect(() => {
        // Actualizar el label cuando cambia el type
        setLabel(type.charAt(0).toUpperCase() + type.slice(1));
    }, [type]);

    const handleUpate = async (event: React.FormEvent) => {
        event.preventDefault();

        const isValidation1 = url === '';

        setValidation1(isValidation1);

        if (!isValidation1) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('/admin/login');
                return;
            }

            setIsSubmitting(true);
            const apiServiceJson = JSON.stringify({
                "type": type,
                "label": label,
                "url": url
            });
            try {
                await fetchStore('social-medias', apiServiceJson, token);

                showSnackbar('Red social agregada correctamente.', 'success');
                navigate('/admin/redes-sociales');
            } catch (error) {
                showSnackbar(`Ocurrió un error al guardar los datos. ${error}`, 'error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Menú fijo */}
            <Drawer page={6} />
            {/* Contenido desplazable */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <form onSubmit={handleUpate}>
                    <div className="bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-4">
                        <span className="font-normal">Agregar red social</span>
                        <div className="w-full flex flex-row space-x-2 items-end">
                            <div className="w-2/12">
                                <ComboBox
                                    label="Red social"
                                    options={options}
                                    selectedOption={type}
                                    setSelectedOption={setType}
                                    status={validation1}
                                />
                            </div>
                            <div className="w-8/12">
                                <Input
                                    type="text"
                                    label="Vínculo"
                                    value={url}
                                    setValue={setUrl}
                                    maxLength={512}
                                    status={validation1}
                                    width="w-full"
                                />
                            </div>
                            <button type="submit" className="w-2/12 h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto">
                                {isSubmitting ? 'Guardando...' : 'Guardar'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSocialMedias;
