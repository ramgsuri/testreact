import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx';
import NewProposalForm from './components/NewProposalForm/NewProposalForm.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Home />, document.getElementById('content'));
ReactDOM.render(<NewProposalForm />, document.getElementById('newProposalModal'));
