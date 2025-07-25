import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.log({ error, info: errorInfo });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <>
                    <h1>Something went wrong.</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;