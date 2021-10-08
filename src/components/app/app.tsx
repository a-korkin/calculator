import React, { FC, useState } from "react";
import Button from "../button";
import "./styles.scss";

const App: FC = () => {

    const [value, setValue] = useState<string>("0");

    const buttons = [
        "CE", "←", "/", 
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ];


    const onClickHandler = () => {
        console.log("clicked");
    }

    return (
        <div className="main">
            <div className="calc">
                <input type="text" id="result" className="input-result" placeholder="0" disabled />
                <div className="buttons">
                    {
                        buttons.map((i) => 
                            <Button key={i} id={i} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
