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
import TeamPico from './components/TeamPico';
import ExpertiseSection from './components/ExpertiseSection';
import AboutUs from './components/AboutUs';
import FooterBar from './components/FooterBar';
import ContactUs from './components/ContactUs';
import Companies from './components/Companies';

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

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/" >
            <TeamPico mode={mode} toggleMode={toggleMode} />
            <ExpertiseSection mode={mode} toggleMode={toggleMode} />
            <AboutUs mode={mode} toggleMode={toggleMode} />
            <FooterBar mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/contactus" >
            <ContactUs mode={mode} toggleMode={toggleMode} />
            <Companies mode={mode} toggleMode={toggleMode} />
            <FooterBar mode={mode} toggleMode={toggleMode} />
          </Route>
          <div className="container mt-3">
            <Route exact path="/textform" >
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
