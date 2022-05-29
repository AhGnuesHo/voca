import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import dummy from "../db/data.json"

export default function DayList() {
  // 함수가 전달된 후 재랜더링, 매개변수 count가 변경될 때만 실행, 매개변수 빈배열
  const [days, setDays] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    return console.log("Count change");
  }, []);
  return (
    <>
      <ul className="list_day">
        {days.map((day) => {
          return (
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button onClick ={() =>{
          return setDays([...days, {
              id : Math.random(),
              day : 1
          }])
      }}>day추가</button>
    </>
  );
}
