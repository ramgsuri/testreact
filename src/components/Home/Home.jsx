import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                Hello World!!
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#newProposal">
                    Add Proposal
                </button>
                <div id="newProposalModal"></div>
            </div>

        );
    }
}

export default Home;