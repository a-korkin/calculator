import React, { FC } from "react";
import "./styles.scss";

const App: FC = () => {
    return (
        <div className="main">
            <button className="btn">CE</button>
            <button className="btn">&larr;</button>

            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">&times;</button>

            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">-</button>

            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">+</button>

            <button className="btn">0</button>
            <button className="btn">.</button>
            <button className="btn">=</button>
        </div>
    )
}

export default App;
