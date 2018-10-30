import React from 'react'
import AnswerOption from './AnswerOption';
import QuestionCount from './QuestionCount';
import Question from './Question'

function QuizChallenge(props){

  function renderAnswerOptions(key, index) {
    return (
      <AnswerOption
        index ={index}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    )
  }

  return (
    <div key={props.questionId}>
      <QuestionCount counter={props.questionId} viewResults={props.viewResults} total={props.questionTotal} />
      <Question content={props.question} />
      <ul>
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
      <div>
        {props.counter > 0 ? (<button className="Previous-btn" onClick={props.setPreviousQuestion} >Previous</button>) : (<div></div>)}
        {props.counter < 4 ? (<button className="next-btn" onClick={props.setNextQuestion}>Next</button>) : (<div></div>)}
      </div>
    </div>
  )
}

export default QuizChallenge
