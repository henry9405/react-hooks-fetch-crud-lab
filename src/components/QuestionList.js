import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
//import QuestionForm from "./QuestionForm";

function QuestionList({ questions, setQuestions }) {
  const [fetchedQuestions, setFetchedQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setFetchedQuestions(data))
      .catch(error => console.error("Error fetching questions:", error));
  }, []);

  const deleteQuestion = (id) => {
    setFetchedQuestions(fetchedQuestions.filter(question => question.id !== id));

    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
    .catch(error => console.error("Error deleting question:", error));
  };

  const updateCorrectAnswer = (id, newCorrectIndex) => {
    setFetchedQuestions(fetchedQuestions.map(question => {
      if (question.id === id) {
        return { ...question, correctIndex: newCorrectIndex };
      }
      return question;
    }));

    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correctIndex: newCorrectIndex
      })
    })
    .catch(error => console.error("Error updating correct answer:", error));
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {fetchedQuestions.map(question => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={deleteQuestion}
            onUpdateCorrectAnswer={updateCorrectAnswer}
          />
        ))}
      </ul>
    </section>
  );

}
export default QuestionList;
