import React from 'react';
import './Model.css';

export default class Modal extends React.Component {
    render() {
        const { onClose } = this.props;

        return (
            <div className="modal-background">
                <div className="modal-body">
                    <p>Something went wrong!</p>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    }
}