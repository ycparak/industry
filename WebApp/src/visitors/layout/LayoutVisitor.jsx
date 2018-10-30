import React, { Component } from 'react';

// COMPONENTS
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


class LayoutVisitor extends Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        { this.props.children }
        <Footer/>
      </React.Fragment>
    )
  }
}

export default LayoutVisitor;
