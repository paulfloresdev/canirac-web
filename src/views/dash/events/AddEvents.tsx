import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import Input from "../../../components/widgets/Input";
import { useSnackbar } from '../../../context/SnackbarContext';
import { Drawer } from "../../../components/drawer/Drawer";
import { fetchStore } from "../../../api/fetch";
import TextArea from "../../../components/widgets/TextArea";


const AddEvents: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    const [titleEs, setTitleEs] = useState<string>('');
    const [titleEn, setTitleEn] = useState<string>('');
    const [descriptionEs, setDescriptionEs] = useState<string>('');
    const [descriptionEn, setDescriptionEn] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [lat, setLat] = useState<string>('');
    const [long, setLong] = useState<string>('');

    const [img, setImg] = useState<File | null>(null);

    const [imgPath, setImgPath] = useState<string>(''); // Estado para la imagen vertical
    const [imgStatus, setImgStatus] = useState<number>(imgPath ? 1 : 0);

    const [validation1, setValidation1] = useState<boolean>(false);
    const [validation2, setValidation2] = useState<boolean>(false);
    const [validation3, setValidation3] = useState<boolean>(false);
    const [validation4, setValidation4] = useState<boolean>(false);
    const [validation5, setValidation5] = useState<boolean>(false);
    const [validation6, setValidation6] = useState<boolean>(false);
    const [validation7, setValidation7] = useState<boolean>(false);
    const [validation8, setValidation8] = useState<boolean>(false);
    const [validation9, setValidation9] = useState<boolean>(false);
    const [validation10, setValidation10] = useState<boolean>(false);
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

    const handleStore = async (event: React.FormEvent) => {
        event.preventDefault();

        const isValidation1 = titleEs === '';
        const isValidation2 = titleEn === '';
        const isValidation3 = descriptionEs === '';
        const isValidation4 = descriptionEn === '';
        const isValidation5 = false;
        const isValidation6 = date === '';
        const isValidation7 = time === '';
        const isValidation8 = address === '';
        const isValidation9 = false;
        const isValidation10 = false;

        setValidation1(isValidation1);
        setValidation2(isValidation2);
        setValidation3(isValidation3);
        setValidation4(isValidation4);
        setValidation5(isValidation5);
        setValidation6(isValidation6);
        setValidation7(isValidation7);
        setValidation8(isValidation8);
        setValidation9(isValidation9);
        setValidation10(isValidation10);

        if (!isValidation1 && !isValidation2 && !isValidation3 && !isValidation4 && !isValidation5 && !isValidation6 && !isValidation7 && !isValidation8 && !isValidation9 && !isValidation10) {
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
            formData.append('price', price);
            formData.append('date', date);
            formData.append('time', time);
            formData.append('address', address);
            formData.append('lat', lat);
            formData.append('long', long);
            formData.append('img', img ?? '');

            try {
                await fetchStore('events', formData, token);

                showSnackbar('Evento agregado correctamente.', 'success');
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
            <Drawer page={3} />

            {/* Contenido desplazable */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <div className="">
                    <span className="font-normal">Editar tarifa de afiliación</span>
                    <form onSubmit={handleStore} className="w-full flex flex-row space-x-4 mt-8">
                        <div className="w-2/6 2xl:w-1/6 h-full bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-8">
                            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                                <span>Imagen</span>
                                {
                                    imgPath ?
                                        <img src={imgPath} alt={titleEs} className='w-4/6 2xl:w-full h-56 rounded-md mt-2 p-1 border-solid border-2 border-border dark:border-border-dark object-cover' /> :
                                        <div className='w-4/6 2xl:w-full h-56 rounded-md mt-2 p-1 border-solid border-2 border-border dark:border-border-dark'>
                                            <div className="w-full h-full bg-option rounded-sm"></div>
                                        </div>
                                        
                                }
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    onChange={(e) => setImg(e.target.files ? e.target.files[0] : null)}
                                    className="block w-full max-w-xs text-sm text-gray-500 dark:text-gray-300"
                                />
                                

                            </div>
                        </div>
                        <div className="w-4/6 2xl:w-5/6 h-full bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-8">
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
                            <div className="w-full flex flex-col 2xl:flex-row space-y-8 2xl:space-y-0 space-x-0 2xl:space-x-2">
                                <div className="w-full flex flex-row space-x-2">
                                    <Input
                                        type="number"
                                        label="Precio"
                                        value={price}
                                        setValue={setPrice}
                                        status={validation5}
                                        width="w-full 2xl:w-2/12"
                                    />
                                    <Input
                                        type="date"
                                        label="Fecha"
                                        value={date}
                                        setValue={setDate}
                                        status={validation6}
                                        width="w-full 2xl:w-2/12"
                                    />
                                    <Input
                                        type="time"
                                        label="Hora"
                                        value={time}
                                        setValue={setTime}
                                        maxLength={32}
                                        status={validation7}
                                        width="w-full 2xl:w-2/12"
                                    />
                                </div>
                                <Input

                                    type="text"
                                    label="Dirección"
                                    value={address}
                                    setValue={setAddress}
                                    maxLength={256}
                                    status={validation8}
                                    width="w-full 2xl:w-1/2"
                                />
                            </div>
                            <div className="w-full flex flex-row space-x-2">
                                <Input
                                    type="number"
                                    label="Latitud"
                                    value={lat}
                                    setValue={setLat}
                                    status={validation9}
                                    width="w-2/6 2xl:w-1/4"
                                />
                                <Input
                                    type="number"
                                    label="Longitud"
                                    value={long}
                                    setValue={setLong}
                                    status={validation10}
                                    width="w-2/6 2xl:w-1/4"
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

export default AddEvents;
