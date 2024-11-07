import React from "react";

interface MemberCardProps {
    member: any
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
    return <div className="overflow-hidden">
        {!member.img_path ?
            <div className="w-48 h-48 bg-accent dark:bg-accent-dark border-solid flex items-center justify-center rounded-full mx-auto">
                <span className="font-medium text-6xl text-primary">{member.initials}</span>
            </div>

            : <img
                src={member.img_path}
                alt={member.initials}
                className="w-48 h-48 object-cover rounded-full bg-body dark:bg-body-dark border-solid mx-auto"
            />}
        <div className="p-4 h-28 flex flex-col items-center">
            <h3 className=" text-title dark:text-title-dark text-center">{member.name}</h3>
            <p className="font-bold text-primary text-center">{member.role}</p>
        </div>
    </div>
};

export const MemberCardPlaceholder: React.FC = () => {
    return <div className="overflow-hidden">
        <div className="w-48 h-48 bg-accent dark:bg-accent-dark border-solid flex items-center justify-center rounded-full mx-auto"></div>
        <div className="p-4 h-28 flex flex-col items-center">
            <div className="w-48 h-5 mb-4 bg-accent dark:bg-accent-dark rounded-md"></div>
            <div className="w-32 h-5 bg-accent dark:bg-accent-dark rounded-md"></div>
        </div>
    </div>
}