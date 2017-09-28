import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Index from './components/index/Index.jsx';

import './app.scss';

const App = () => (
  <Router>
    <Index />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
