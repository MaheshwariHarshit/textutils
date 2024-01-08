import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alerts from './Components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert] = useState()

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=> {
      setAlert(null)
    },1500)
  }

  const toggleMode = (color)=>{
    if(mode ==='light') {
      setMode('dark'); 
      document.body.style.backgroundColor = color
      showAlert("Dark Mode is enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is enabled", "success")
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert = {alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path = "/about" element={<About mode ={mode}/>}/>
      <Route exact path = "/" element={<TextForm showAlert={showAlert} heading = "Enter the text you want to analyze below" mode={mode} />}/>
      {/* <TextForm showAlert={showAlert} heading = "Enter the text you want to analyze below" /> */}
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
