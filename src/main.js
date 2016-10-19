import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import NewProposalForm from './components/NewProposalForm/NewProposalForm.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux';
import ProposalReducer from './reducers/ProposalReducer.jsx';
import { addProposal } from './actions/ProposalActions.jsx'

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Home />, document.getElementById('content'));
ReactDOM.render(<NewProposalForm />, document.getElementById('newProposalModal'));

let store = createStore(ProposalReducer);

store.subscribe(function() {
  ReactDOM.render(

  )
});

store.dispatch(addProposal('New Proposal', 'This is a new Proposal', 'mobilize'));