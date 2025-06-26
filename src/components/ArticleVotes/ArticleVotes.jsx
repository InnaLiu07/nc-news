import React, { useState } from "react";
import axios from "axios";

const ArticleVotes = ({ article_id, initialVotes }) => {
  console.log("Initial votes:", initialVotes);
  const [votesCount, setVotesCount] = useState(Number(initialVotes) || 0);

  const handleVote = () => {
    setVotesCount((currentVotesCount) => currentVotesCount + 1);
    axios
      .post(`http://localhost:7777/api/articles/${article_id}/votes`)
      .catch((error) => {
        console.error("Error posting vote:", error);

        setVotesCount((currentVotesCount) => currentVotesCount - 1);
      });
  };

  return (
    <div>
      <button onClick={handleVote}>Like +1</button>
      <p>{votesCount}</p>
    </div>
  );
};

export default ArticleVotes;
