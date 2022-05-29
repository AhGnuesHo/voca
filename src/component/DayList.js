import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFatch from "../hooks/useFatch";
// import dummy from "../db/data.json"

export default function DayList() {
  const days = useFatch(`http://localhost:3001/days/`);

  if (days.length === 0){
      return <span>Loading</span>
  }

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
    
    </>
  );
}
