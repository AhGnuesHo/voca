// 컴포넌트는 항상 대문자로 시작한다. 

import World from "./World";

const Hello = () => {
    return (
        // jsx는 return안에 하나의 태그만으로 구성이 되어있어야하므로 div등으로 감싸야한다. 
    <div>
        <p> hello </p>
        <World></World>
    </div>
    );
}

export default Hello;

// 아래와 같이 사용해도 된다.
// export default function Hello() {
//     <p> hello </p>
// }