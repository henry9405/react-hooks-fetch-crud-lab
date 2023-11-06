// import React, { useState } from "react";
// import AdminNavBar from "./AdminNavBar";
// import QuestionForm from "./QuestionForm";
// import QuestionList from "./QuestionList";
// function App() {
//   const [page, setPage] = useState("List");
//   const [questions, setQuestions] = useState([]);

//   const addQuestionToList = (newQuestion) => {
//     setQuestions([...questions, newQuestion]);
//   };

//   return (
//     <main>
//       <AdminNavBar onChangePage={setPage} />
//       {page === "Form" ? (
//         <QuestionForm onAddQuestion={addQuestionToList} />
//       ) : (
//         <QuestionList questions={questions} setQuestions={setQuestions} />
//       )}
//     </main>
//   );
// }

// export default App;
import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const addQuestionToList = newQuestion => {
    setQuestions([...questions, newQuestion]);
  };

  const deleteAllQuestions = () => {
    setQuestions([]);
    // Additional logic for deleting questions from the server/API if necessary
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} onDeleteQuestions={deleteAllQuestions} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={addQuestionToList} />
      ) : (
        <QuestionList questions={questions} setQuestions={setQuestions} />
      )}
    </main>
  );
}

export default App;
