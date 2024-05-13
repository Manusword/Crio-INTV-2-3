import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        
        // Binding the method to the component instance
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    handleDecrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;