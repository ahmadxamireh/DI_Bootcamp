import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function App() {
    return (
        <div>
            <ErrorBoundary>
                <h1>Hello from the App</h1>
            </ErrorBoundary>
        </div>
    );
}

export default App;