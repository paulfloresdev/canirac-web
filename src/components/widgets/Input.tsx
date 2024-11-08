import React, { useState } from "react";
import { TabFlag } from "../table/TabFlag";

interface InputProps {
    label: string;
    type: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    regExp?: RegExp;
    className?: string;
    maxLength?: number;
    status?: boolean;
    convertToUpperCase?: boolean;
    convertToLowerCase?: boolean;
    showPasswordToggle?: boolean; // Añadido para manejar la visibilidad de la contraseña\
    noLabel?: boolean;
    width?: string;
    flag?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    value,
    setValue,
    regExp,
    className,
    maxLength,
    status,
    convertToUpperCase,
    convertToLowerCase,
    showPasswordToggle = false, // Valor por defecto
    noLabel,
    width,
    flag
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        if (convertToUpperCase) {
            newValue = newValue.toUpperCase();
        } else if (convertToLowerCase) {
            newValue = newValue.toLowerCase();
        }

        if (regExp) {
            const regex = regExp;
            if (regex.test(newValue)) {
                setValue(newValue);
            }
        } else {
            setValue(newValue);
        }
    };

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div className={width}>
            <div className="flex flex-col flex-1 relative text-sm">
                {noLabel ? <div></div> : flag ?
                    <div className="flex flex-row space-x-2 items-center mb-1">
                        <span className="text-selected dark:text-selected-dark">{label}</span>
                        <TabFlag lang={flag}/>
                    </div> :
                    <span className="mb-1 text-selected dark:text-selected-dark">{label}</span>}
                <div className="relative">
                    <input
                        value={value}
                        onChange={handleChange}
                        type={showPasswordToggle && type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                        maxLength={maxLength}
                        className={`w-full ${status ? 'border-red-700 focus:border-red-700' : 'border-border dark:border-border-dark focus:border-focusborder dark:focus:border-focusborder-dark'} bg-background dark:bg-background-dark h-auto border-solid border-2 rounded-lg py-1.5 px-2 focus:outline-none ${className}`}
                    />
                    {showPasswordToggle && type === "password" && (
                        <button
                            type="button"
                            onClick={handleTogglePasswordVisibility}
                            className="absolute inset-y-0 right-2 flex items-center text-sm font-light text-option dark:text-option-dark mx-1"
                        >
                            {isPasswordVisible ? "Ocultar" : "Mostrar"}
                        </button>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Input;
