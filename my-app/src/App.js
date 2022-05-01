import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Details from './components/Details.js';
import Search from './components/Search.js';

function App() {
    return (
        <div className="App">
            <Header />

            <main className="wrapper">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/details/:movieId" element={<Details />} />
                    <Route path='*' element={<Home />} />
                </Routes>

            </main>

            <Footer />
        </div>
    );
}

export default App;