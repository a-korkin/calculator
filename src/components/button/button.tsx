import React, { FC } from "react";

interface IButtonProps {
    id: string;
    onClick: (v: string) => void;
}

const Button: FC<IButtonProps> = ({ id, onClick }) => {

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        let value = event.currentTarget.getAttribute("id") ?? "";
        onClick(value);
    }

    return (
        <button onClick={e => clickHandler(e)} className="btn" id={id}>{id}</button>
    );
}

export default Button;
