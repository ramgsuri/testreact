import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const modalInstance = (
    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                One fine body...
            </Modal.Body>

            <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>

        </Modal.Dialog>
    </div>
);


class NewProposalForm extends React.Component {

    render() {
        return modalInstance;
    }

    //
    // render() {
    //     return (
    //
    //
    //
    //
    //
    //         <div className="modal" id="newProposal">
    //             <div className="modal-header">
    //                 <h3>Create a new Proposal</h3>
    //             </div>
    //             <form>
    //                 <div className="modal-body">
    //                     <label htmlFor="client">Client</label>
    //                     <select>
    //                         <option>Abc</option>
    //                         <option>def</option>
    //                     </select>
    //
    //                     <label htmlFor="industry">Industry</label>
    //                     <input type="text"/>
    //                 </div>
    //                 <div className="modal-footer">
    //                     <input type="submit" value="Create a Proposal"/>
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }
}

export default NewProposalForm;