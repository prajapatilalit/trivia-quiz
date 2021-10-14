import React from "react";

const Categories = ({ quizData, selectedCategory, handleSelectCategory }) => {
  let categoryDuplicates = quizData.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);

  return (
    <div>
      <form>
        <select value={selectedCategory} onChange={handleSelectCategory}>
          {categoryDuplicates.map((quiz, index) => {
            return <option key={index}>{quiz.category}</option>;
          })}
        </select>
      </form>
      {quizData
        .filter((quiz) => quiz.category === selectedCategory)
        .map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.question}</h4>
              {item.incorrect_answers.map((inCorr, index) => {
                return <p key={index}>{inCorr}</p>;
              })}

              <span>{item.correct_answer}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Categories;
