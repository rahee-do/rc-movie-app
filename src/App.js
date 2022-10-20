import React from "react";
// class component
class App extends React.Component{
    constructor(prop) {
        super(prop);
        console.log("hello");
    }
    // class component 의 data 를 넣을 공간 (data is the will change.)
    state = {
        count: 0
    };

    add = () => {
        this.setState(current => ({count: current.count + 1}));
    };
    minus = () => {
        this.setState(current => ({count: current.count - 1}));
    };

    componentDidMount() {
        console.log("component rendered");
    }
    componentDidUpdate() {
        console.log("I just updated");
    }
    componentWillUnmount() {
        console.log("Goodbye cruel world");
    }

    // class component 는 return 이 아닌 render 함수를 실행시킨다.
    render() {
        console.log("I'm rendering");
        return (
            <div>
                <h1>I'm a class component</h1>
                <h2>The number is : {this.state.count}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}
export default App;
