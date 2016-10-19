export const GET_PROPOSALS = 'GET_PROPOSALS';
export const ADD_PROPOSAL = 'ADD_PROPOSAL';

const proposals = [
  {
    name: 'Proposal ABC',
    description: 'I am the first proposal',
    status: 'propose'
  },
  {
    name: 'Proposal DEF',
    description: 'I am the second proposal',
    status: 'mobilize'
  },
  {
    name: 'Proposal GHI',
    description: 'I am the third proposal',
    status: 'manage'
  }
];

export function getProposals() {
  return {
    type: GET_PROPOSALS,
    payload: {
      proposals
    }
  }
}

export function addProposal(name, description, status) {
  return {
    type: ADD_PROPOSAL,
    payload: {
      name,
      description,
      status
    }
  }
}