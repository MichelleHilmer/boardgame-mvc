import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import AddGame from './AddGame';

ReactDOM.render((
<BrowserRouter>
    <App />
</BrowserRouter>
), document.getElementById('root'));

export default Main