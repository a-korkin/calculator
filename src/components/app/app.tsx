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

    const { reset, resetBoofer, setOperation, setBoofer, setDisplay, inc, dec, mul, div } = useActions();
    const { reducer } = useTypedSelector(state => state);

    const onClickHandler = (value: string = "") => {
        if (reducer.display === "0")
            setDisplay(value);
        else 
            setDisplay(reducer.display + value);

        switch (value) {
            case "+":
                setOperation(value);
                inc(parseFloat(reducer.boofer));
                resetBoofer();
                break;
            case "-":
                setOperation(value);
                dec(parseFloat(reducer.boofer));
                resetBoofer();
                break;
            case "x":
                console.log(reducer.total);
                setOperation(value);
                mul(parseFloat(reducer.boofer));
                resetBoofer();
                break;
            case "/":
                setOperation(value);
                div(parseFloat(reducer.boofer));
                resetBoofer();
                break;                
            case "=":
                calculate(reducer.total, parseFloat(reducer.boofer), reducer.operation);
                resetBoofer();
                break;
            case "CE":
                reset();
                break;
            default:
                setBoofer(value);
                break;
        }
    }

    const calculate = (a: number, b: number, operation: string): number => {
        switch (operation) {
            case "+":
                inc(parseFloat(reducer.boofer));
                setDisplay((reducer.total + parseFloat(reducer.boofer)).toString());
                return a + b;
            case "-":
                dec(parseFloat(reducer.boofer));
                setDisplay((reducer.total - parseFloat(reducer.boofer)).toString());
                return a - b;
            case "x": 
                mul(parseFloat(reducer.boofer));
                setDisplay((reducer.total * parseFloat(reducer.boofer)).toString());
                return a * b;
            case "/":
                div(parseFloat(reducer.boofer));
                setDisplay((reducer.total / parseFloat(reducer.boofer)).toString())
                return a / b;
            default:
                return 0;
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
