import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
      this.setState({
          error: error,
          errorInfo: errorInfo
      })
  }

  render() {
      if (this.state.hasError){
          console.log('Something went wrong.');
      }
      return this.props.children;
  }
}

function App({ children }) {
  return (
      <div className="App">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
  );
}

export default App;
