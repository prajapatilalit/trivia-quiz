import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(quizData.category);

  useEffect(() => {
    const getQuizData = async () => {
      const res = await fetch("https://opentdb.com/api.php?amount=30")
        .then((response) => response.json())
        .catch((error) => {
          console.log(error);
        });
      const data = await res.results;
      console.log(data);
      setQuizData(data);
    };
    getQuizData();
  }, []);

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category">
          <Categories
            quizData={quizData}
            handleSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
