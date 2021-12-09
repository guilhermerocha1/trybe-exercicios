import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className='content'>
          <Content />
        </section>
        <Footer />
      </>
    );
  }
}

export default App;
