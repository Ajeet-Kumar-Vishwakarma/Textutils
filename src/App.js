import { useState } from 'react';
import './App.css';
// import About from './components/about';
import Navbar from './components/navbar'
import TextForm from './components/textform'
import Alert from './components/Alert';
// import {BrowserRouter as Router, Switch,
//    Route} from "react-router-dom"
   

function App() {
  const[Mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null); 
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor='#090650';
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Dark Mode";
    }
    else {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled", "success");
        document.title = "TextUtils - Light Mode";
    }
}
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
    {/* <Switch>
            <Route path= "/about">
              <About />
            </Route>
            <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
            </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
