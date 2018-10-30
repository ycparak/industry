import React, { Component } from 'react';

import Quiz from './quizChallenge/QuizChallenge';
import quizQuestions from './Questions';
import Result from './quizChallenge/Result'

class Challenge extends Component {

  state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    allQuestions: [],
    answer: '',
    selectedAnswers: {},
    result: ''
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
      allQuestions: quizQuestions
    })
  }

  handleAnswerSelected = (e) => {
    var _self = this;
    var obj= _self.state.selectedAnswers;
    var index = parseInt(e.target.value, 10);
    console.log("For question " + (_self.state.counter + 1) + ": answer is " + index + " selected");
    var Qindex = (_self.state.counter)
    obj[Qindex] = index;
    _self.setState({
      slectedAnswers: obj
    })
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  setPreviousQuestion = () => {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  viewResults = (e) => {
    e.preventDefault();
    this.setState({
      result : true
    })
  }

  getResults = () => {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults = (result) => {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz = () => {
    return (
      <Quiz 
        viewResults={this.viewResults}
        setNextQuestion={this.setNextQuestion}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
        answer={this.state.answer}
        selectedAnswer = {this.state.selectedAnswers[this.state.counter]}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected = {this.handleAnswerSelected}
      />
    )
  }

  renderResult = () => {
    return <Result quizResult={this.state.allQuestions} answers={this.state.selectedAnswers} />
  }

  render() {
    return (
      <div>
        <h2>Quiz assigment:</h2>
        { this.state.result ? this.renderResult() : this.renderQuiz() }
      </div>
    )
  }
}

export default Challenge