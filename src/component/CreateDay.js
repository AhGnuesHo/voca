import { useNavigate } from "react-router-dom";
import useFatch from "../hooks/useFatch"

export default function CreateDay(){
    const days = useFatch("http://localhost:3001/days");
    const navigate = useNavigate();


    return (
    <div>
      <h3>현재 일수 : {days.length} 일</h3>
      <button onClick = {() => {
          return(
              fetch("http://localhost:3001/days/", {
                  method : "POST",
                  headers : {
                      "Content-Type" : "application/json"
                  },
                  body : JSON.stringify({
                      day : days.length + 1, 
                  })
              })
              .then(res => {
                  if(res.ok){
                      alert("생성이 완료 되었습니다.");
                    navigate('/');

                  }
              })
          )
      }}>Day 추가</button>
    </div>
    )
}