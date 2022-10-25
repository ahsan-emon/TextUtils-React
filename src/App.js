// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
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
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  const redMode = () => {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'red';
    showAlert("Red mode has been enabled", "success");
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} redMode={redMode} />
        <Alert alert={alert} />
        <Switch>
          <div className="container mt-3">
            <Route exact path="/" >
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>

            <Route path='/about'>
              <About toggleMode={toggleMode} mode={mode} />
            </Route>

          </div>
        </Switch>
      </Router>
      {/* <Router>
        <Routes>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} redMode={redMode} />
          <Alert alert={alert} />
          <Route path="/" index element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}></Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}
export default App;
