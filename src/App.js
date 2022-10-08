import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Home from "./pages/Home";
import Draw from "./pages/Draw";



function App() {
    return (
      <Router>
        <div className="App" style={{backgroundColor: "#161f2e", minHeight: "100vh", overflowY: 'auto'}}>
          <Routes>             
              <Route path="/" element={<Home/>}/>
              <Route path="/board/:dimension" element={<Draw/>}/>
          </Routes>
        </div>
      </Router>
    );
}

export default App;
