import Header from "./component/Header"
import DayList from "./component/DayList"
import Day from "./component/Day"
import EmptyPage from "./component/EmptyPage"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreateWord from "./component/CreateWord"
function App() {  
  return(
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      {/* Routes 외부 : 모든 페이지에 공통으로 노출 */}
      {/* Routes 내부 :url에 따라 다른 페이지 노출 */}
      <Routes>
        <Route path="/" element ={ <DayList/>}/>
        <Route path="/day/:day" element = {<Day/>}/>
        <Route path="/create_word" element = {<CreateWord/>}/>
        <Route path="*" element = {<EmptyPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App;
