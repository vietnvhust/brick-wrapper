import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/ui/header/Header";
import { GlobalStyle } from './assets/containts/globalStyled';
function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Header />
        </Router>
    );
}

export default App;