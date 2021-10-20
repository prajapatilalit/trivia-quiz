import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home_container">
        <h1>Welcome To Trivia Quiz</h1>
        <Link to="/category">
          <button>Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
