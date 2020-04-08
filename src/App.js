import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Challenges from "./components/Challenges";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="App-header">
                <Header></Header>
            </div>

            <div className='about'>
                <About></About>
            </div>
            <div className='work'>
                <Work></Work>
            </div>
            {/*
            <div className='challenges'>
                <Challenges></Challenges>
            </div> */ }
            <div className='contact'>
                <Contact></Contact>
            </div>
        </div>
    );
}

export default App;