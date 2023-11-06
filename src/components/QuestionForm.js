import React, { useState, useEffect } from 'react';

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: '',
    answers: ['', '', '', ''],
    correctIndex: 0,
  });
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    return () => {
      setIsMounted(false); 
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'answers') {
      const updatedAnswers = [...formData.answers];
      updatedAnswers[parseInt(event.target.getAttribute('data-index'))] = event.target.value;
      setFormData({ ...formData, answers: updatedAnswers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newQuestion) => {
        if (isMounted) {
          onAddQuestion(newQuestion);
          setFormData({
            prompt: '',
            answers: ['', '', '', ''],
            correctIndex: 0,
          });
        }
      })
      .catch((error) => console.error('Error adding question:', error));
  };

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answers"
            value={formData.answers[0]}
            onChange={handleChange}
            data-index="0"
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answers"
            value={formData.answers[1]}
            onChange={handleChange}
            data-index="1"
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answers"
            value={formData.answers[2]}
            onChange={handleChange}
            data-index="2"
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answers"
            value={formData.answers[3]}
            onChange={handleChange}
            data-index="3"
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            {formData.answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
