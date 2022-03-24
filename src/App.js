import React from 'react'
import './Style/App.css'

const App = () => {
  return (
    <div className="App">
      <section className="quizz">
        <div className="question_section">
          <div className="question_count">
            <span>Вопрос 1</span> / 4
          </div>
          <div className="question_text">Тескт вопроса 1</div>
        </div>
        <div className="answer_section">
          <button>Вариант 1</button>
          <button>Вариант 2</button>
          <button>Вариант 3</button>
          <button>Вариант 4</button>
        </div>
      </section>
    </div>
  )
}

export default App
