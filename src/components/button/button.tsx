import React, { FC } from "react";

interface IButtonProps {
    id: string;
}

const Button: FC<IButtonProps> = ({id}) => {

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.getAttribute("id"));
    }

    return (
        <button onClick={e => clickHandler(e)} className="btn" id={id}>{id}</button>
    );
}

export default Button;
