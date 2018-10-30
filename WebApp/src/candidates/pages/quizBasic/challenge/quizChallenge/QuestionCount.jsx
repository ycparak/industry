import React from 'react'

function QuestionCount(props) {
  return (
    <div>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
      {props.counter === 5 ? (<button type="submit" className="result-link" onClick={props.viewResults}>View Results</button>) : <div></div>}
    </div>
  )
}

export default QuestionCount
