import dummy from "../db/data.json";
// url 정보
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {
  const day = useParams().day;
  const wordList = dummy.words.filter((word) => {
    return word.day === Number(day);
  });
  return (
    <>
      <h2> DAY {day} </h2>
      <table>
        <tbody>
          {wordList.map((word) => {
            return (
             <Word word ={word} key = {word.id}/>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
