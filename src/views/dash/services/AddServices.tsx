import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import Input from "../../../components/widgets/Input";
import { useSnackbar } from '../../../context/SnackbarContext';
import { Drawer } from "../../../components/drawer/Drawer";
import { fetchStore } from "../../../api/fetch";
import TextArea from "../../../components/widgets/TextArea";


const AddServices: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    const [titleEs, setTitleEs] = useState<string>('');
    const [titleEn, setTitleEn] = useState<string>('');
    const [descriptionEs, setDescriptionEs] = useState<string>('');
    const [descriptionEn, setDescriptionEn] = useState<string>('');
    const [contactName, setContactName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [img, setImg] = useState<File | null>(null);

    const [imgPath, setImgPath] = useState<string>(''); // Estado para la imagen vertical
    const [imgStatus, setImgStatus] = useState<number>(imgPath ? 1 : 0);

    const [validation1, setValidation1] = useState<boolean>(false);
    const [validation2, setValidation2] = useState<boolean>(false);
    const [validation3, setValidation3] = useState<boolean>(false);
    const [validation4, setValidation4] = useState<boolean>(false);
    const [validation5, setValidation5] = useState<boolean>(false);
    const [validation6, setValidation6] = useState<boolean>(false);
    const [isSubmittingData, setIsSubmittingData] = useState<boolean>(false);
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

    const handleStoreData = async (service: React.FormEvent) => {
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

        if(!img){
            showSnackbar('No se ha seleccionado ninguna imagen.', 'error');
            return;
        }

        if (!isValidation1 && !isValidation2 && !isValidation3 && !isValidation4 && !isValidation5 && !isValidation6) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('dashboard/login');
                return;
            }

            setIsSubmittingData(true);
            const formData = new FormData();
            formData.append('title_es', titleEs);
            formData.append('title_en', titleEn);
            formData.append('description_es', descriptionEs);
            formData.append('description_en', descriptionEn);
            formData.append('contact_name', contactName);
            formData.append('phone', phone);
            formData.append('img', img ?? '');

            try {
                await fetchStore('services', formData, token);

                showSnackbar('Servicio agregado correctamente.', 'success');
                navigate('/admin/servicios')
            } catch (error) {
                showSnackbar(`Ocurrió un error al guardar los datos. ${error}`, 'error');
            } finally {
                setIsSubmittingData(false);
            }
        }
    };


    return (
        <div className="h-screen flex flex-col lg:flex-row">
            {/* Menú fijo */}
            <Drawer page={2} />

            {/* Contenido desplazable */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="">
                    <span className="font-normal">Agregar servicio</span>
                    <form onSubmit={handleStoreData} className="w-full flex flex-row space-x-4 mt-4">
                        <div  className="w-3/12 2xl:w-1/6 h-full bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-8">
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
                            </div>
                        </div>
                        <div className="w-9/12 2xl:w-5/6 h-full bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-4">
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
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddServices;
