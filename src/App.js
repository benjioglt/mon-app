import './App.scss';
import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    const [currentPage, setCurrentPage] = React.useState('home');

    return (
        <div className="App">
            <Header/>
            <Footer/>
        </div>
    );
}
export default App;
