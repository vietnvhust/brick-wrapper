import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/ui/header/Header";
import { GlobalStyle } from './assets/containts/globalStyled';
import MainRouter from "./routers/Main.router";
function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Header />
            <MainRouter/>
        </Router>
    );
}

export default App;