import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import Input from "../../../components/widgets/Input";
import { useSnackbar } from '../../../context/SnackbarContext';
import { Drawer } from "../../../components/drawer/Drawer";
import { fetchDestroyImage, fetchUpdateData, fetchUpdateImage } from "../../../api/fetch";


const EditChamberMembers: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { member } = location.state || {};  // Asegúrate de recibir el evento desde la ubicación

    const [id] = useState<number>(member.id);
    const [name, setName] = useState<string>(member.name);

    const [img, setImg] = useState<File | null>(null);

    const [imgPath, setImgPath] = useState<string>(member.img_path); // Estado para la imagen vertical
    const [imgStatus, setImgStatus] = useState<number>(imgPath ? 1 : 0);

    const [validation1, setValidation1] = useState<boolean>(false);
    const [isSubmittingData, setIsSubmittingData] = useState<boolean>(false);
    const [isSubmittingImg, setIsSubmittingImg] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const { showSnackbar } = useSnackbar(); // Asegúrate de desestructurar `showSnackbar`

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigate]);

    useEffect(() => {
        if (img) {
            setImgPath(URL.createObjectURL(img));
            console.log(imgPath);
            console.log(img);
            if (!(imgStatus === 1)) {
                setImgStatus(2)
            }
        }
    }, [img]);

    const handleUpateData = async (event: React.FormEvent) => {
        event.preventDefault();

        const isValidation1 = name === '';

        setValidation1(isValidation1);

        if (!isValidation1) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('dashboard/login');
                return;
            }

            setIsSubmittingData(true);
            const apiServiceJson = JSON.stringify({
                "name": name
            });
            try {
                await fetchUpdateData('chamber-members', id, apiServiceJson, token);

                showSnackbar('Miembro actualizado correctamente.', 'success');
            } catch (error) {
                showSnackbar(`Ocurrió un error al guardar los datos. ${error}`, 'error');
            } finally {
                setIsSubmittingData(false);
            }
        }
    };

    const handleDeleteImage = async () => {
        if (!token) {
            showSnackbar('Error de autenticación.', 'error');
            navigate('dashboard/login');
            return;
        }

        setIsDeleting(true);
        try {
            await fetchDestroyImage('chamber-members', id, token);
            setImgPath('')
            showSnackbar('Imagen eliminada exitosamente.', 'success');
            setImgStatus(0);
            setImg(null);
        } catch (error) {
            showSnackbar('Ocurrió un error al eliminar la imagen .', 'error');
            console.log(error);
        } finally {
            setIsDeleting(false);
        }
    }

    const handleUpdateImage = async (event: React.FormEvent) => {
        event.preventDefault();  // Esto previene el comportamiento predeterminado de enviar el formulario

        if (img) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('dashboard/login');
                return;
            }

            setIsSubmittingImg(true);
            const formData = new FormData();
            formData.append("img", img);

            try {
                await fetchUpdateImage('chamber-members', id, formData, token);
                showSnackbar('Imagen actualizada exitosamente.', 'success');
                setImgStatus(1);
                setImg(null);
            } catch (error) {
                showSnackbar('Ocurrió un error al actualizar la imagen.', 'error');
                console.log(error);
            } finally {
                setIsSubmittingImg(false);
            }
        } else {
            showSnackbar('No se ha seleccionado ninguna imagen.', 'error');
        }
    };


    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Menú fijo */}
            <Drawer page={4} />

            {/* Contenido desplazable */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="">
                    <span className="font-normal">Editar tarifa de afiliación</span>
                    <div className="w-full flex flex-row space-x-4 mt-8">
                        <form onSubmit={handleUpdateImage} className="w-1/2 h-auto bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-8">
                            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                                <span>Imagen</span>
                                {
                                    imgPath ?
                                        <img src={imgPath} alt={name} className='w-48 h-48 rounded-full mt-2 p-1 border-solid border-2 border-border dark:border-border-dark' /> :
                                        <div className='w-48 h-48 rounded-full mt-2 p-1 border-solid border-2 border-border dark:border-border-dark'>
                                            <div className="w-full h-full bg-option rounded-full"></div>
                                        </div>
                                }
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setImg(e.target.files ? e.target.files[0] : null)}
                                    className="block w-full max-w-xs text-sm text-gray-500 dark:text-gray-300"
                                />
                                <div className="w-full flex flex-row space-x-2 pt-4 justify-center ">
                                    <button type="submit" className="w-full h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                                        {isSubmittingImg ? ((imgStatus === 0 || imgStatus === 2) ? 'Agregando...' : 'Actualizando...') : ((imgStatus === 0 || imgStatus === 2) ? 'Agregar' : 'Actualizar')}
                                    </button>
                                    {
                                        imgStatus === 1 ?
                                            <button
                                                type="button"
                                                className="w-full h-9 bg-red-600 hover:bg-red-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium"
                                                onClick={handleDeleteImage}
                                            >
                                                {isDeleting ? 'Eliminando...' : 'Eliminar'}
                                            </button> :
                                            <div></div>
                                    }

                                </div>

                            </div>
                        </form>
                        <form onSubmit={handleUpateData} className="w-1/2 h-full bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-8">
                            <Input
                                type="text"
                                label="Nombre"
                                value={name}
                                setValue={setName}
                                maxLength={128}
                                status={validation1}
                                width="w-full"
                            />
                            <button type="submit" className="w-full h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto">
                                {isSubmittingData ? 'Guardando...' : 'Guardar'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EditChamberMembers;
