import { useEffect, useState } from "react";
import { getNews, type NewsArticle } from "./services/newsService";
import "./App.css";

function App() {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function fetchNews() {
            try {
                const data = await getNews();
                setNews(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred");
                }
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