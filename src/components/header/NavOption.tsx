import React, { useState, useEffect } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import NavIcon from "./NavIcon";

interface NavOptionProps {
    children: React.ReactNode;
    isSelected: boolean,
    filename: string;
    href: string;
    isMutable: boolean;
    bannerScrolled: boolean;
}

const NavOption: React.FC<NavOptionProps> = ({ children, isSelected, filename, href, isMutable, bannerScrolled }) => {
    const isDarkMode = useDarkMode();
    var type = '';
    var text = '';

    if (isMutable) {
        if (bannerScrolled) {
            if (isSelected) {
                type = 'bg-opacity-100 dark:bg-opacity-100'
            } else {
                type = 'bg-opacity-0 dark:bg-opacity-0 hover:bg-accent hover:dark:bg-accent-dark';
            }
        } else {
            if (isSelected) {
                type = 'bg-opacity-40 dark:bg-opacity-40'
            } else {
                type = 'bg-opacity-0 dark:bg-opacity-0 hover:bg-accent hover:dark:bg-accent-dark hover:bg-opacity-40 hover:dark:bg-opacity-40';
            }
        }
    } else {
        if (isSelected) {
            type = 'bg-opacity-100 dark:bg-opacity-100'
        } else {
            type = 'bg-opacity-0 dark:bg-opacity-0 hover:bg-accent hover:dark:bg-accent-dark';
        }
    }

    if (isMutable) {
        if (bannerScrolled) {
            if (isSelected) {
                text = isDarkMode ? 'text-selected-dark' : 'text-selected';
            } else {
                text = 'text-option';
            }
        } else {
            text = 'text-selected-dark'
        }
    } else {
        if (isSelected) {
            text = isDarkMode ? 'text-selected-dark' : 'text-selected';
        } else {
            text = 'text-option';
        }
    }


    return <a
        href={href}
        className={`bg-accent dark:bg-accent-dark ${type} p-3 rounded-custom flex flex-row space-x-2 w-38 justify-center items-center`}
    >
        <NavIcon
            name={filename}
            isSelected={isSelected}
            isMutable={isMutable}
            bannerScrolled={bannerScrolled}
        />
        <span className={`${text}`}>{children}</span>
    </a>
};

export default NavOption;
