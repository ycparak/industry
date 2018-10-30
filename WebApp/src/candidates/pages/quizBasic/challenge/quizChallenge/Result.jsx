import React, { Component } from 'react'

class Result extends Component {

  renderQuestions() {
    return this.props.quizResult.map((_data,index) =>{
      return (
        <div className="list-grp padding-bottom--12">
          {_data.question} <br/>
          The correct answer is option: {_data.answerindex}. You have selected {this.props.answers[index]+1} 
          { ((this.props.answers[index]+1) === _data.answerindex) 
            ? (<span className="status">. Correct</span>) 
            : (<span></span>)
          }
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
        <div>{this.renderQuestions()}</div>
      </div>
    )
  }
}

export default Result
