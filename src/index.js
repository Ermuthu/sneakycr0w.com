import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #1e2326;
    }
`;
