import React from "react";
import useDarkMode from "../../hooks/useDarkMode";

interface NavIconProps {
    name: string;
    isMutable: boolean;
    bannerScrolled: boolean;
    isSelected?: boolean;
}

const NavIcon: React.FC<NavIconProps> = ({ name, isMutable, bannerScrolled, isSelected }) => {
    const isDarkMode = useDarkMode();
    var type = '';

    if (isMutable) {
        if (bannerScrolled) {
            if (isSelected) {
                type = isDarkMode ? 'white' : 'black';
            } else {
                type = 'option';
            }
        } else {
            type = 'white';
        }
    } else {
        if (isSelected) {
            type = isDarkMode ? 'white' : 'black';
        } else {
            type = 'option';
        }
    }

    return <img src={`/public/assets/icons/${type}/${name}.png`} alt="" className="h-5" />
};

export default NavIcon;
