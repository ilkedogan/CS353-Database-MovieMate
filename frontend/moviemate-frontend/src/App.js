import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import MainScreen from './screens/MainScreen';
import ProfileScreen from "./screens/profileScreens/ProfileScreen";

function App() {
    return (
        <div className="App">
            <MainScreen/>
        </div>
    );
}

export default App;
