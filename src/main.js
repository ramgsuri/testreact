import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Home />, document.getElementById('content'));