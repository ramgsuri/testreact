import React from 'react';

class NewProposalForm extends React.Component {
    render() {
        return (
            <form>
                <div className="modal">
                    <div className="modal-header">
                        <h3>Create a new Proposal</h3>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="client">Client</label>
                        <select>
                            <option>Abc</option>
                            <option>def</option>
                        </select>

                        <label htmlFor="industry">Industry</label>
                        <input type="text"/>
                    </div>
                    <div className="modal-body">
                        <input type="submit" value="Create a Proposal"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default NewProposalForm;