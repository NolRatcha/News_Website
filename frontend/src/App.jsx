
import { useEffect, useState } from "react";
import { getNews } from "./services/newsService";
import "./App.css";

function App() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchNews() {
            try {
                const data = await getNews();
                setNews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    if (loading) {
        return <h2>Loading news...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div className="container">
            <header className="header">
                <h1>Daily News</h1>
                <p>Stay informed. Stay updated.</p>
            </header>

            <main className="news-grid">
                {news.map((article) => (
                    <article
                        className="news-card"
                        key={article.id}
                    >
                        {article.image_url && (
                            <img
                                src={article.image_url}
                                alt={article.title}
                            />
                        )}

                        <div className="news-content">
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>
                    </article>
                ))}
            </main>

            {news.length === 0 && (
                <p>No news articles available.</p>
            )}
        </div>
    );
}

export default App;
