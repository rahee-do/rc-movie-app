import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
    return (
        <HashRouter>
            <Route path="/home" exact={true}>
                <h1>Home</h1>
            </Route>
            <Route path="/home/introduction">
                <h1>Introduction</h1>
            </Route>
            <Route path="/about/test">
                <h1>About Test</h1>
            </Route>
            {/*
            router 동작 원리
            2개의 router를 하기 때문에 /about일 때 /도 같이 보여줘서 두 개의 컴포넌트가 보여지는 것이다.
            exact={true}를 사용하여 해결한다.
            exact는 해당 url과 일치하지 않으면 router 하지 않는다.
            */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;
