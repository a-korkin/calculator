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

    const { resetBoofer, setBoofer, setDisplay, inc, dec } = useActions();
    const { reducer } = useTypedSelector(state => state);

    const onClickHandler = (value: string = "") => {
        // let res = 0;
        
        // if (value && value !== "+" && value !== "=") {
        //     res = parseInt(value);
        // } 
        
        if (reducer.display === "0")
            setDisplay(value);
        else 
            setDisplay(reducer.display + value);

        // switch (value) {
        //     case "+":
        //         console.log(`before: ${reducer.total}`);
        //         console.log(`new: ${reducer.boofer}`);
        //         inc(parseInt(reducer.boofer));
        //         resetBoofer();
        //         console.log(`after: ${reducer.total}`);
        //         break;
        //     case "=":
        //         setDisplay(reducer.total.toString());
        //         break;
        //     default:
        //         setBoofer(value);
        //         break;
        // }
        
        setBoofer(value);

        if (value === "=") {
            let arr = reducer.display.replace("=", "").split("+");
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
                inc(parseInt(arr[i]));
            }
            setDisplay(reducer.total.toString());
        }
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
