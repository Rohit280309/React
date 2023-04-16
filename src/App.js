import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <>
      <Router basename='/React'>
        <Navbar title="MyApp" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <div className="container my-3">
          <TextForm heading="Enter the text : " mode={mode} showAlert={showAlert}/>  
          </div>
         <About /> */}
      
        <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} />
          <Route exact path='/' element={
            <div className="container my-3">
              <TextForm heading="Enter the text : " mode={mode} showAlert={showAlert}/>  
            </div>
           } />
                    
        </Routes>
      </Router>
      
      
    </>
  );
}

export default App;
