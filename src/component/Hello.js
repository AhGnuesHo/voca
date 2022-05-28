// 컴포넌트는 항상 대문자로 시작한다. 

import World from "./World";
import styles from "./Hello.module.css";

const Hello = () => {
    return (
        <div>
            <h1>Hello</h1>
            <button onClick = {showName}>show name</button>
            <button onClick = {() => {
                console.log("20")
            }}>show age</button>
            <input type = "text" onChange={(e) => console.log(e.target.value)}></input>

        </div>
    );
}
// 미리 함수를 만들어 전달
function showName(){
    console.log("seung")
}

export default Hello;
