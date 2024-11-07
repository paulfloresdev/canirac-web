import React, { useState } from "react";

import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { useAuth } from "../../../context/AuthContext";
import { BASE_URL } from "../../../constants/url";
import Input from "../../../components/widgets/Input";


const LogIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false); // Estado para manejar la carga

    const { login } = useAuth(); // Obtener la función login del contexto
    const navigate = useNavigate(); // Hook para navegación

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior

        setLoading(true); // Set loading to true when starting the request

        try {
            const response = await fetch(`${BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess('Inicio de sesión exitoso');
                login(data.token); // Guardar el token en el contexto y localStorage
                navigate('/admin/membresias'); // Redirigir a la página de dashboard
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error en la solicitud');
                console.error('Error:', errorData);
            }
        } catch (error) {
            setError('Error en la conexión con el servidor');
            console.error('Fetch error:', error);
        } finally {
            setLoading(false); // Set loading to false after request completes
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient dark:bg-custom-gradient-dark space-y-12">
            <img src="/public/assets/logo/canirac-dark.png" alt="Canirac Logo" className='h-auto w-1/6 object-cover' />
            <div className="w-1/4 rounded-custom bg-accent dark:bg-accent-dark ">
                <div className="w-full flex-1 flex-col px-8 py-12 flex items-center justify-center">
                    <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-center">
                        <div className="text-center">
                            <span className="text-base md:text-lg lg:text-lg xl:text-lg text-title dark:text-title-dark font-medium">
                                Iniciar sesión
                            </span>
                        </div>
                        <div className="flex flex-col w-full xl:gap-6 gap-8 mt-8">
                            <Input
                                type="text"
                                label="Email"
                                value={email}
                                setValue={setEmail}
                                regExp={/^[a-zA-Z0-9\.@]*$/}
                                maxLength={128}
                                convertToLowerCase={true}
                            />
                        </div>
                        <div className="flex flex-col w-full xl:gap-6 gap-8 mt-4">
                            <Input
                                type="password" // Changed to password for security
                                label="Contraseña"
                                value={password}
                                setValue={setPassword}
                                regExp={/^[a-zA-Z0-9,\.#_@$%?¿¡!*-]*$/}
                                maxLength={128}
                                showPasswordToggle={true}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading} // Disable the button while loading
                            className={`bg-option dark:bg-option text-background dark:text-background-dark py-2 px-4 rounded-custom font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''} mt-12`}
                        >
                            {loading ? 'Cargando...' : 'Ingresar'}
                        </button>
                        {error && <div className="text-red-500 mt-4">{error}</div>}
                        {success && <div className="text-green-500 mt-4">{success}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
