import './App.css';

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.js";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import Details from './components/Details/Details.js';
import Search from './components/Search/Search.js';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Logout from "./components/Logout/Logout.js";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Header />

                <main className="wrapper">

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/details/:movieId" element={<Details />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path='*' element={<Home />} />
                    </Routes>

                </main>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;