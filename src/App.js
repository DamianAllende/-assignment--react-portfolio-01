import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';
import PortfolioFixed from './components/Portfolio-fixed';
import PortfolioContent from './components/Portfolio-content';

class App extends Component {
  render() {
    return (
        <div>
          <PortfolioFixed />
          <PortfolioContent />
        </div>  
      
    );
  }
}

export default App;
