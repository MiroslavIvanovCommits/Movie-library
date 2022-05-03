import "./Header.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";

const Header = () => {
    const { user } = useContext(AuthContext);

    let guestNavigation = (
        <>
            <Link to="/login" className="button">Login</Link>
            <Link to="/register" className="button">Register</Link>
        </>
    );
    let userNavigation = (
        <Link to="/logout" className="button">Logout</Link>
    );

    return (
        <header>
            <div className="topnav">
                <nav className="navigation">
                    <Link to="/">My Movie Collection</Link>
                    <Link to="/search">Search</Link>
                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }
                    <div className="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search by movie title..." name="search" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header; 