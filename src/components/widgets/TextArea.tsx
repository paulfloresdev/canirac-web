import React from "react";
import { TabFlag } from "../table/TabFlag";

interface TextAreaProps {
    label: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    regExp?: RegExp;
    className?: string;
    maxLength?: number;
    status?: boolean;
    convertToUpperCase?: boolean;
    convertToLowerCase?: boolean;
    noLabel?: boolean;
    width?: string;
    flag?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
    label,
    value,
    setValue,
    regExp,
    className,
    maxLength,
    status,
    convertToUpperCase,
    convertToLowerCase,
    noLabel,
    width,
    flag
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    return (
        <div className={width}>
            <div className="flex flex-col flex-1 relative text-sm">
                {noLabel ? <div></div> : flag ?
                    <div className="flex flex-row space-x-2 items-center mb-1">
                        <span className="text-selected dark:text-selected-dark">{label}</span>
                        <TabFlag lang={flag} />
                    </div> :
                    <span className="mb-1 text-selected dark:text-selected-dark">{label}</span>}
                <div className="relative">
                    <textarea
                        value={value}
                        onChange={handleChange}
                        maxLength={maxLength}
                        className={`w-full ${status ? 'border-red-700 focus:border-red-700' : 'border-border dark:border-border-dark focus:border-focusborder dark:focus:border-focusborder-dark'} bg-background dark:bg-background-dark border-solid border-2 rounded-lg py-2 px-2 focus:outline-none ${className}`}
                        rows={4} // Puedes ajustar el número de filas según el tamaño que necesites
                    />
                </div>
            </div>
        </div>
    );
}

export default TextArea;
