import dummy from "../db/data.json";
// url 정보
import { useParams } from "react-router-dom";

export default function Day() {
  const day = useParams().day;
  const wordList = dummy.words.filter((word) => {
    return word.day === day;
  });
  return (
    <>
      <h2> DAY {day} </h2>
      <table>
        <tbody>
          {wordList.map((word) => {
            return (
              <tr key={word.id}>
                <td>{word.eng}</td>
                <td>{word.kor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
