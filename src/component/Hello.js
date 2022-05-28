// 컴포넌트는 항상 대문자로 시작한다. 

import World from "./World";
import styles from "./Hello.module.css";

const Hello = () => {
    return (
        // jsx는 return안에 하나의 태그만으로 구성이 되어있어야하므로 div등으로 감싸야한다. 
    <div>
        <p style = {
            // 스타일 작성법 1: 인라인으로 작성 
            // 객체처럼 작성해야한다.
            {
                color : "red",
                marginBottom: "50px"
            
            }
        }> hello </p>
        <World></World>
        <div className={styles.box}>Hello</div>
    </div>
    );
}

export default Hello;

// 아래와 같이 사용해도 된다.
// export default function Hello() {
//     <p> hello </p>
// }