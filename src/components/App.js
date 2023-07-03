import logo from '../logo.svg';
import '../App.css';
import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LangForm from "./LangForm";
import Family from "./Family";

const url = "https://p2langserv.onrender.com"

function App() {
const [langs, setLangs] = useState([])

useEffect(()=>{
  fetch(`${url}/languages`)
  .then(r => r.json())
  .then(data => setLangs(data))
},[])


  return (
    <div className="App"> <NavBar />
          <Routes>
            <Route exact path="/" element={<Home langs={langs} />}/>
            <Route exact path="/Family" element={<Family langs={langs} />}/>
            <Route exact path="/LangForm" element={<LangForm url={url} setLangs={setLangs} Langs={langs}/>}/>
          </Routes>
    </div>
  );
}

export default App;
