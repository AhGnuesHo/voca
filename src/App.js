import './App.css';

function App() {
  // JSX
  const name = "seung"
  const user = {
    name : "seung2",
    age : 26
  };
  const naver = {
    name : "네이버",
    url : "https://naver.com"
  }
  return(
    <div className="App">
      {/*  스타일을 자바스크립트 객체처럼 작성 */}
      <h1 style = {
        {color : "red", 
        backgroundColor : "yellow"}}
        // 중괄호를 사용하여 문자열, 숫자 변수를 대입 
        // 단 boolean이나 객체는 표현하지 못한다.
        >
        welcome {name}
        {/* 객체는 사용 할 수 없음 */}
        {/* <p>{user}</p> */}
        </h1>
        <a href={naver.url}>{naver.name}</a>

    </div>
  )
}

export default App;
