// import dummy from "../db/data.json";
// url 정보
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import useFatch from "../hooks/useFatch";

export default function Day() {
    const {day} = useParams();
   const words = useFatch(`http://localhost:3001/words?day=${day}`)
    

//   const wordList = words.filter((word) => {
//     return word.day === Number(day);
//   });
  return (
    <>
      <h2> DAY {day} </h2>
      <table>
        <tbody>
          {words.map(word => (
             <Word word ={word} key = {word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
