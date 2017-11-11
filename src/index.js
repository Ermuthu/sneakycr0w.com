import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Roboto'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    body {
        background-color: paperwhite;
    }
`;
