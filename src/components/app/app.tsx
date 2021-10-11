import React, { FC } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import Button from "../button";
import "./styles.scss";

const App: FC = () => {
    const buttons = [
        "CE", "←", "/", 
        "7", "8", "9", "x",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ];

    const { setDisplay, inc } = useActions();
    const { reducer } = useTypedSelector(state => state);

    const onClickHandler = (value: string = "") => {
        let res = 0;
        
        if (value) {
            res = parseInt(value);
        } 

        // inc(res);
        setDisplay(reducer.display + value);
        
        // console.log(reducer.value);
        // console.log(reducer.display);
    }

    return (
        <div className="main">
            <div className="calc">
                <input type="text" id="result" className="input-result" placeholder="0" disabled value={reducer.display} />
                <div className="buttons">
                    {
                        buttons.map((i) => 
                            <Button onClick={onClickHandler} key={i} id={i} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
