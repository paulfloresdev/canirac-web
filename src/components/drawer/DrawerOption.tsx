import { useNavigate } from "react-router-dom";

interface DrawerOptionProps {
    path: string,
    label: string,
    isSelected: boolean
}

export const DrawerOption: React.FC<DrawerOptionProps> = ({ path, label, isSelected }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
        <button onClick={handleClick} className={`w-full rounded-custom px-4 py-2 text-start text-selected-dark ${isSelected ? 'bg-accent-dark font-normal' : 'bg-background-dark'} hover:bg-accent-dark`}>
            {label}
        </button>
    );
}