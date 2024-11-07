import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useFetchIndex } from "../../../hooks/useFetch";
import { Drawer } from "../../../components/drawer/Drawer";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/widgets/Input";
import { useSnackbar } from "../../../context/SnackbarContext";
import { fetchUpdate } from "../../../api/fetch";

const DashContacts: React.FC = () => {
    const { token } = useAuth();
    const navigate = useNavigate();

    const { data, refetch } = useFetchIndex('contacts', null, '')
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [lat, setLat] = useState<string>('');
    const [long, setLong] = useState<string>('');

    const [validation1, setValidation1] = useState<boolean>(false);
    const [validation2, setValidation2] = useState<boolean>(false);
    const [validation3, setValidation3] = useState<boolean>(false);
    const [validation4, setValidation4] = useState<boolean>(false);
    const [validation5, setValidation5] = useState<boolean>(false);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
        }
    }, [token, navigator]);

    useEffect(() => {
        if (data && data.data) {
            const contact = data.data[0];
            setPhone(contact.phone);
            setEmail(contact.email);
            setAddress(contact.address);
            setLat(contact.lat);
            setLong(contact.long);
        }
    }, [data]);

    const handleUpdate = async (event: React.FormEvent) => {
        event.preventDefault();

        const isValidation1 = phone.length < 10;
        const isValidation2 = email === '';
        const isValidation3 = address === '';
        const isValidation4 = lat === '';
        const isValidation5 = long === '';

        setValidation1(isValidation1);
        setValidation2(isValidation2);
        setValidation3(isValidation3);
        setValidation4(isValidation4);
        setValidation5(isValidation5);

        if (!isValidation1 && !isValidation2 && !isValidation3 && !isValidation4 && !isValidation5) {
            if (!token) {
                showSnackbar('Error de autenticación.', 'error');
                navigate('admin/login');
                return;
            }

            setIsSubmitting(true);
            try {

                const apiMembershipJson = JSON.stringify({
                    "phone": phone,
                    "email": email,
                    "address": address,
                    "lat": lat,
                    "long": long
                });

                await fetchUpdate('contacts', 1, apiMembershipJson, token);

                showSnackbar('Datos de contacto actualizados correctamente.', 'success');
                refetch();
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
            <Drawer page={5} />
            {/* Content */}
            <div className="flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16">
                <form onSubmit={handleUpdate}>
                    <div className="bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col">
                        <span className="font-normal mb-8">Datos de contacto</span>
                        <div className="w-full flex flex-row space-x-4 mb-4">
                            <Input
                                type="phone"
                                label="Teléfono"
                                value={phone}
                                setValue={setPhone}
                                maxLength={13}
                                status={validation1}
                                width="w-1/6"
                            />
                            <Input
                                type="email"
                                label="Correo electrónico"
                                value={email}
                                setValue={setEmail}
                                maxLength={256}
                                status={validation2}
                                width="w-1/4"
                            />
                        </div>
                        <div className="w-full flex flex-row space-x-4 mb-4">
                            <Input
                                type="address"
                                label="Domicilio"
                                value={address}
                                setValue={setAddress}
                                maxLength={512}
                                status={validation3}
                                width="w-full"
                            />
                        </div>
                        <div className="w-full flex flex-row space-x-4 mb-12">
                            <Input
                                type="text"
                                label="Latitud"
                                value={lat}
                                setValue={setLat}
                                regExp={/^[0-9. ]*$/}
                                status={validation4}
                                width="w-1/3"
                            />
                            <Input
                                type="text"
                                label="Longitud"
                                value={long}
                                setValue={setLong}
                                regExp={/^[0-9. ]*$/}
                                status={validation5}
                                width="w-1/3"
                            />
                        </div>
                        <button type="submit" className="w-full h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto">
                            {isSubmitting ? 'Guardando...' : 'Guardar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DashContacts;