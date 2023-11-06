// import React from "react";
// import QuestionList from "./QuestionList";

// function AdminNavBar({ onChangePage }) {
//   return (
//     <nav>
//       <button onClick={() => onChangePage("Form")}>New Question</button>
//       <button onClick={() => onChangePage("List")}>View Questions</button>
//       <button onClick={() => deleteQuestion("List")}>Delete Questions</button>
//     </nav>
//   );
// }

// function deleteQuestion(page) {
//   if (page === "List") {
//     QuestionList();
//   }
// }
// export default AdminNavBar;

import React from "react";
import QuestionList from "./QuestionList";

function AdminNavBar({ onChangePage, onDeleteQuestions }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
      <button onClick={() => onDeleteQuestions()}>Delete Questions</button>
    </nav>
  );
}

export default AdminNavBar;
