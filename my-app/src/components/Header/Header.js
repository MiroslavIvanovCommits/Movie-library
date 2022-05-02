import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="topnav">
                <nav className="navigation">
                    <Link to="/">My Movie Collection</Link>
                    <Link to="/search">Search</Link>
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