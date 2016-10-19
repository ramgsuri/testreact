import { GET_PROPOSALS, ADD_PROPOSAL } from '../actions/ProposalActions.jsx'

const initialState = {
  proposals: []
};

function proposalReducer(state=initialState, action) {
  switch(action.type) {
    case GET_PROPOSALS:
      return getProposalsReducer(state, action);
    case ADD_PROPOSAL:
      return addProposalReducer(state, action);
    default:
      return state;
  }
}

function getProposalsReducer(state, action) {
  return Object.assign({}, state, action.payload.proposals);
}

function addProposalReducer(state, action) {
  return Object.assign({}, state, {
    proposals: [
      ...state.proposals,
      {
        name: action.payload.name,
        description: action.payload.description,
        status: action.payload.status
      }
    ]
  });
}