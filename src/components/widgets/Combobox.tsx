import React from "react";

interface ComboBoxProps {
    options: Option[];
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
    label: string;
    status?: boolean;
}

export interface Option {
    value: string;
    label: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, selectedOption, setSelectedOption, label, status }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col space-y-1 outline-none">
            <label htmlFor="combo" className="text-selected dark:text-selected-dark">{label}</label>
            <select
                id="combo"
                value={selectedOption}
                onChange={handleChange}
                className={`${status ? 'border-red-700' : 'border-border dark:border-border-dark'} outline-none border-solid border-2 px-2 rounded-lg bg-background dark:bg-background-dark h-9`}
            >
                <option value="0">Selecciona</option>
                {options.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ComboBox;
