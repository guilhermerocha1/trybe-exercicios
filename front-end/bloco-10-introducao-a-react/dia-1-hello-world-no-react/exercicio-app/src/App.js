import React, { Component } from 'react';
import Header from './Components/header.jsx';
import Content from './Components/Content.jsx';
import Footer from './Components/footer';
import './App.css';

class App extends Component {
  render () {

    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
