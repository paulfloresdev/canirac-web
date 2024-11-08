import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import Input from "../../../components/widgets/Input";
import { useSnackbar } from '../../../context/SnackbarContext';
import { Drawer } from "../../../components/drawer/Drawer";
import { fetchUpdateData, fetchUpdateImage } from "../../../api/fetch";
import TextArea from "../../../components/widgets/TextArea";


const EditServices: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { service } = location.state || {};  // Asegúrate de recibir el serviceo desde la ubicación

    const [id] = useState<number>(service.id);
    const [titleEs, setTitleEs] = useState<string>(service.title_es);
    const [titleEn, setTitleEn] = useState<string>(service.title_en);
    const [descriptionEs, setDescriptionEs] = useState<string>(service.description_es);
    const [descriptionEn, setDescriptionEn] = useState<string>(service.description_en);
    const [contactName, setContactName] = useState<string>(service.contact_name);
    const [phone, setPhone] = useState<string>(service.phone);

    const [img, setImg] = useState<File | null>(null);

    const [imgPath, setImgPath] = useState<string>(service.img_path); // Estado para la imagen vertical
    const [imgStatus, setImgStatus] = useState<number>(imgPath ? 1 : 0);

    const [validation1, setValidation1] = useState<boolean>(false);
    const [validation2, setValidation2] = useState<boolean>(false);
    const [validation3, setValidation3] = useState<boolean>(false);
    const [validation4, setValidation4] = useState<boolean>(false);
    const [validation5, setValidation5] = useState<boolean>(false);
    const [validation6, setValidation6] = useState<boolean>(false);
    const [isSubmittingData, setIsSubmittingData] = useState<boolean>(false);
    const [isSubmittingImg, setIsSubmittingImg] = useState<boolean>(false);
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

    const handleUpateData = async (service: React.FormEvent) => {
        service.preventDefault();

        const isValidation1 = titleEs === '';
        const isValidation2 = titleEn === '';
        const isValidation3 = descriptionEs === '';
        const isValidation4 = descriptionEn === '';
        const isValidation5 = contactName === '';
        const isValidation6 = phone.length !== 10;

        setValidation1(isValidation1);
        setValidation2(isValidation2);
        setValidation3(isValidation3);
        setValidation4(isValidation4);
        setValidation5(isValidation5);
        setValidation6(isValidation6);

        if (!isValidation1 && !isValidation2 && !isValidation3 && !isValidation4 && !isValidation5 && !isValidation6) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('dashboard/login');
                return;
            }

            setIsSubmittingData(true);
            const apiServiceJson = JSON.stringify({
                "title_es": titleEs,
                "title_en": titleEn,
                "description_es": descriptionEs,
                "description_en": descriptionEn,
                "contact_name": contactName,
                "phone": phone
            });
            try {
                await fetchUpdateData('services', id, apiServiceJson, token);

                showSnackbar('Servicio actualizado correctamente.', 'success');
            } catch (error) {
                showSnackbar(`Ocurrió un error al guardar los datos. ${error}`, 'error');
            } finally {
                setIsSubmittingData(false);
            }
        }
    };

    const handleUpdateImage = async (service: React.FormEvent) => {
        service.preventDefault();  // Esto previene el comportamiento predeterminado de enviar el formulario

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
                await fetchUpdateImage('services', id, formData, token);
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
            <Drawer page={2} />

            {/* Contenido desplazable */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="">
                    <span className="font-normal">Editar servicio</span>
                    <div className="w-full flex flex-row space-x-4 mt-4">
                        <form onSubmit={handleUpdateImage} className="w-3/12 2xl:w-1/6 h-full bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-8">
                            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                                <span className="font-normal">Imagen</span>
                                {
                                    imgPath ?
                                        <img src={imgPath} alt={titleEs} className='w-full h-auto rounded-md p-1 border-solid border-2 border-border dark:border-border-dark object-cover' /> : <div></div>

                                }
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    onChange={(e) => setImg(e.target.files ? e.target.files[0] : null)}
                                    className="block w-full max-w-xs text-sm text-gray-500 dark:text-gray-300"
                                />
                                <div className="w-full flex flex-col space-y-2 justify-center ">
                                    <button type="submit" className="w-full h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium">
                                        {isSubmittingImg ? ((imgStatus === 0 || imgStatus === 2) ? 'Agregando...' : 'Actualizando...') : ((imgStatus === 0 || imgStatus === 2) ? 'Agregar' : 'Actualizar')}
                                    </button>
                                </div>

                            </div>
                        </form>
                        <form onSubmit={handleUpateData} className="w-9/12 2xl:w-5/6 h-full bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-4">
                            <span className="font-normal">Datos</span>
                            <div className="w-full flex flex-row space-x-2">
                                <Input
                                    type="text"
                                    label="Titulo"
                                    flag="es"
                                    value={titleEs}
                                    setValue={setTitleEs}
                                    maxLength={256}
                                    status={validation1}
                                    width="w-full"
                                />
                                <Input
                                    type="text"
                                    label="Titulo"
                                    flag="en"
                                    value={titleEn}
                                    setValue={setTitleEn}
                                    maxLength={256}
                                    status={validation2}
                                    width="w-full"
                                />
                            </div>
                            <div className="w-full flex flex-row space-x-2">
                                <TextArea
                                    label="Descripción"
                                    flag="es"
                                    value={descriptionEs}
                                    setValue={setDescriptionEs}
                                    maxLength={2048}
                                    status={validation3}
                                    width="w-full"
                                />
                                <TextArea
                                    label="Descripción"
                                    flag="en"
                                    value={descriptionEn}
                                    setValue={setDescriptionEn}
                                    maxLength={2048}
                                    status={validation4}
                                    width="w-full"
                                />
                            </div>
                            <div className="w-full flex flex-row space-x-2">
                                <Input
                                    type="text"
                                    label="Contacto"
                                    value={contactName}
                                    setValue={setContactName}
                                    maxLength={128}
                                    status={validation5}
                                    width="w-full"
                                />
                                <Input
                                    type="tel"
                                    label="Teléfono"
                                    value={phone}
                                    setValue={setPhone}
                                    maxLength={13}
                                    status={validation6}
                                    width="w-full"
                                    regExp={/^[0-9.]*$/}
                                />
                            </div>
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

export default EditServices;
