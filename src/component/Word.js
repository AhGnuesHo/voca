import { useState } from "react";

export default function Word({word}) {
    const [isShow,setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }
  return (
    <tr key={word.id}  className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked = {isDone} onChange ={() => {
            return setIsDone(!isDone)
        }}/>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick = {toggleShow}>뜻 {isShow ? '보기' : '숨기기'}</button>
        <button classNam="btn_del">삭제</button>
      </td>
    </tr>
  );
}
