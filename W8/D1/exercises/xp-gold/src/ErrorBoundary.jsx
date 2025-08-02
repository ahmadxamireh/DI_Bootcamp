import React, { Component } from 'react';
import Modal from './Model.jsx';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, errorInfo });
    }

    occurError = () => {
        this.setState({ hasError: true });
        throw new Error("Manually triggered error");
    };

    resetError = () => {
        this.setState({ hasError: false, errorInfo: null });
    };

    render() {
        return (
            <>
                <button onClick={this.occurError}>Occur an error</button>

                {this.state.hasError && (
                    <Modal onClose={this.resetError} />
                )}

                {!this.state.hasError && this.props.children}
            </>
        );
    }
}