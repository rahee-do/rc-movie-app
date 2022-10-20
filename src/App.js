import React from "react";
// class component
class App extends React.Component{
    // class component 의 data 를 넣을 공간 (data is the will change.)
    state = {
        isLoading: true,
        movies: []
    };
    componentDidMount() {
        setTimeout(() => {
           this.setState({ isLoading: !this.state.isLoading, book: true })
        }, 3000);
    };

    render() {
        console.log("calss의 this.state를 사용하기 싫다면 ES6 문법을 사용하면 된다.");
        const {isLoading} = this.state;
        return (
            <div>{isLoading ? "Loading..." : "We are ready"}</div>
        );
    }
}
export default App;
