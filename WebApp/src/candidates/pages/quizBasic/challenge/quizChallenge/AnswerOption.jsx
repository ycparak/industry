import React from 'react'

function AnswerOption(props) {
  return (
    <li>
      <button 
        type="button" 
        id={props.answerType} 
        value={props.index} 
        className={(props.selectedAnswer === props.index) ? 'btn-primary' : '' }
        onClick={props.onAnswerSelected}
        >{props.answerContent}</button>
    </li>
  )
}

export default AnswerOption
