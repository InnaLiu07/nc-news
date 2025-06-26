import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ArticlesList.css";
import axios from "axios";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:7777/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (loading) {
    return <p>Loading articles...</p>;
  }
  if (!loading && articles.length === 0) {
    return <p>No articles available at the moment.</p>;
  }
  return (
    <main className="articles-list">
      {articles.map((article) => (
        <Link
          key={article.article_id}
          to={`/articles/${article.article_id}`}
          className="article-card"
        >
          <img src={article.article_img_url} alt={`Img for ${article.title}`} />
          <div className="article-info">
            <h2>{article.title}</h2>
            <p>
              <strong>Author:</strong> {article.author}
            </p>
            <p>
              <strong>Topic:</strong> {article.topic}
            </p>
            <p>
              <strong>Votes:</strong> {article.votes} |{" "}
              <strong>Comments:</strong> {article.comment_count}
            </p>
            <p className="date">
              Published {new Date(article.created_at).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default ArticlesList;
