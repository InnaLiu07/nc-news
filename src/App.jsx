import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
