import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer'

// Çalıştırmak içişn yükleme sırası:
//** 1-) npm install 
//2-) npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome 
//3-) npm i -S @fortawesome/free-light-svg-icons
//4-) npm install reactstrap
export default () => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={isOpen}/>
        <Content toggle={toggle} isOpen={isOpen}/>
      </div>
      <Footer/>
    </Router>
  );
}
