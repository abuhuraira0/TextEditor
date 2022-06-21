import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

 const showAlert = (message,type)=>{
    setAlert(
      {
        type: type,
        msg: message
      }
    )
    setTimeout(() => {
      setAlert(null)        
      }, 3000);
  }
  let toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#042143'
      showAlert("Dark mode has been enabled","success")
    }
  }
  return (
        <>
        <Router>
        <Navbar title="TextEditor" about="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3" >
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Form mode={mode} heading="Enter the text to analyze" showAlert={showAlert}/>
          </Route>
        </Switch>
        </div>
        </Router>
        </>
  );
}
export default App;
