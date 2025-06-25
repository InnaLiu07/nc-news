import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";

const Header = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios
      .get("/api/topics")
      .then((res) => {
        setTopics(res.data.topics);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
      });
  }, []);
};
