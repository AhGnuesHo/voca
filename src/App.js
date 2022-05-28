import './App.css';
// 만든 컴포넌트 사용해보기 
// .확장자는 생략
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {  
  return(
    <div className="App">
      <Hello age = {10} />
      <Hello age = {30} />
      <Hello age = {40}/>
      
      </div>

  )
}

export default App;
