import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Comments.css";
import axios from "axios";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:7777/api/articles/${article_id}/comments`)
      .then((response) => {
        setComments(response.data.comments);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  if (!comments.length) {
    return <p>Comments not found.</p>;
  }

  return (
    <main className="comments">
      {comments.map((comment) => (
        <article key={comment.comment_id} className="comment-card">
          <section className="comment-meta">
            <p>
              <strong>Author:</strong> {comment.author}
            </p>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(comment.created_at).toLocaleDateString()}
            </p>
            <p>
              <strong>Votes:</strong> {comment.votes}
            </p>
          </section>
          <div className="comment-body">{comment.body}</div>
        </article>
      ))}
    </main>
  );
};

export default Comments;
