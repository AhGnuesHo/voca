// 컴포넌트는 항상 대문자로 시작한다. 

import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";

const Hello = () => {
    const [name, setName] = useState('Mike');

    return (
        <div>
            <h1>state</h1>
            <h1>컴포넌트의 속성값</h1>
            <h1 className="name">{name}</h1>
            <button onClick = {() => {
                setName(name === "Mike" ? "Jane" : "Mike");
            }}>changNameButton</button>
            
            
        </div>
    );
}


export default Hello;
