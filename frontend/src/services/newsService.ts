const API_URL = "http://localhost:8080/api";

// Describes the structure of a news article from the backend.
export interface NewsArticle {
    id: number;
    title: string;
    content: string;
    image_url: string;
    created_at: string;
}

// Retrieve all news articles from the Go backend.
export async function getNews(): Promise<NewsArticle[]> {
    const response = await fetch(`${API_URL}/news`);

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    return (await response.json()) as NewsArticle[];
}