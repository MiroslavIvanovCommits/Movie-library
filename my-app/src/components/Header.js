import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navigation">
                <Link to="/">My Movie Collection</Link>
                <div className="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header; 