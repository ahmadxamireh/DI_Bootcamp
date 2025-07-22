import { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import './App.css'


class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        if (this.state.count === 5) throw new Error('I crashed!');
        return <h1 onClick={this.handleClick}>{this.state.count}</h1>;
    }
}

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red', show: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidUpdate(nextProps, nextState, nextContext) {
        console.log('after update')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate', prevState);
        return null; // or return a meaningful snapshot if needed
    }

    handleDelete = () => {
        alert('The component named Header is about to be unmounted');
        this.setState({ show: false });
    }

    render() {
        return (
            <>
                <h2>My Favorite Color is {this.state.favoriteColor}</h2>
                <Child show={this.state.show} deleteHeader={this.handleDelete} />
            </>
        );
    }
}

class Child extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        alert('unmount');
    }

    render() {
        if (this.props.show) {
            return (
                <>
                    <h2>Hello World!</h2>
                    <button onClick={this.props.deleteHeader}>Delete Header</button>
                </>
            );
        }
        return null;
    }
}

function App() {
    return (
        <>
            <b>
                Click on the numbers to increase the counters.
                <br/>
                The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a
                component.
            </b>
            <hr/>
            <ErrorBoundary>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will
                   replace both of them.</p>
                <BuggyCounter/>
                <BuggyCounter/>
            </ErrorBoundary>
            <hr/>
            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not
               affected.</p>
            <ErrorBoundary><BuggyCounter/></ErrorBoundary>
            <ErrorBoundary><BuggyCounter/></ErrorBoundary>
            <hr/>
            <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
            <BuggyCounter/>
            <hr/>
            <Color/>
        </>
    )
}

export default App
