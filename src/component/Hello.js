// 컴포넌트는 항상 대문자로 시작한다. 

import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

const Hello = (props) => {
    
    const [name, setName] = useState('Mike');

    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인" : "청소년"
    return (
        <div>           
            <h1>{name}</h1>
            {/* props로 전달받은 값은 컴포넌트에서 변경 할 수 없다. */}
            {/* <h1>{props.age}세</h1> */}
            <h1>{age}세 {msg}</h1>
            {/* Hello 컴포넌트 안에서는 useState이지만, UserName컴포넌트에서는 전달받은 props */}
            <UserName name = {name}></UserName>
            <button onClick = {() => {
                setName(name === "Mike" ? "Jane" : "Mike");
            }}>changNameButton</button>
            <button onClick = {() =>{
                setAge(age+1)    
            }}>addage</button>
            
            
        </div>
    );
}


export default Hello;
