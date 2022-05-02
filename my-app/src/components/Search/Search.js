import "./Search.css";

const Search = () => {
    return (
        <div className="search-box">
            <form action="/form/submit" method="GET">
                <input type="text" name="text" className="search" placeholder="Search here!" />
                <input type="submit" name="submit" className="submit" value="Search" />
            </form>
        </div>
    );
}

export default Search; 