import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ArticlePage.css";
import Comments from "../comments/Comments";
import ArticleVotes from "../ArticleVotes/ArticleVotes";

import axios from "axios";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:7777/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <main className="article-page">
      <h1 className="article-title">{article.title}</h1>
      <img
        className="article-image"
        src={article.article_img_url}
        alt={`Image for ${article.title}`}
      />
      <section className="article-meta">
        <p>
          <strong>Author:</strong> {article.author}
        </p>
        <p>
          <strong>Topic:</strong> {article.topic}
        </p>
        <p>
          <strong>Created:</strong>{" "}
          {new Date(article.created_at).toLocaleDateString()}
        </p>

        <p>
          <strong>Votes:</strong>{" "}
          <ArticleVotes
            article_id={article.article_id}
            initialVotes={article.votes}
          />
        </p>
        <p>
          <strong>Comments:</strong> {article.comment_count || 0}
        </p>
      </section>
      <article className="article-body">{article.body}</article>
      <Comments />
    </main>
  );
};

export default ArticlePage;
