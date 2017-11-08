import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFontLoader from 'webfontloader';

import Index from './components/index/Index.jsx';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <Router>
    <Index />
  </Router>,
  document.getElementById('root')
);
