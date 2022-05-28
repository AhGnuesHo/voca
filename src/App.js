import './App.css';
// 만든 컴포넌트 사용해보기 
// .확장자는 생략
import Hello from './component/Hello';
import Welcome from './component/Welcome';
function App() {
  
  return(
    <div className="App">
      <Hello/>
      <Welcome/>
    </div>
  )
}

export default App;
