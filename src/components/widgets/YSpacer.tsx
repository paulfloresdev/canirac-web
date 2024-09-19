import React from "react";

interface YSpacerProps {
    value: string,
}

const YSpacer: React.FC<YSpacerProps> = ({ value }) => {
    return <div className={" w-full h-" + value}>&nbsp;</div>
}

export default YSpacer;