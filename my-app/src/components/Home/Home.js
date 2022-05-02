import "./Home.css";

const Home = () => {
    return (
        <>
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Discover your favourite movies</h1>
                <button type="button" className="hero-button" onclick="location.href='tours.html'">
                    Search &raquo;
                </button>
            </div>
        </section>

        <section className="favourites">
        <h1>Your Favourites</h1>
        
        </section>
        </>
    );
}

export default Home; 