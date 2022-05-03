import './App.css';

import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext.js";
import useLocalStorage from "./hooks/useLocalStorage.js";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import Details from './components/Details/Details.js';
import Search from './components/Search/Search.js';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Logout from "./components/Logout/Logout.js";

const initialAuthState = {
    accessToken: "",
    emal: "",
    _id: ""
};

function App() {
    const [user, setUser] = useLocalStorage("user", initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
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
        </AuthContext.Provider>
    );
}

export default App;