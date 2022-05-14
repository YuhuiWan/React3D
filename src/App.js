import * as React from "react";
import { Router, Route, Redirect } from "wouter";
import Menu from "./components/Menu";
import Image from "./components/Image";
import { MyCanvas } from "./components/MyCanvas";
import Pictures from "./components/Pictures";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <Header />
            <Router>
                <Redirect from="/" to="/index" />
                <Route path="/index" component={Menu}/>
                <Route path="/image" component={Image}/>
                <Route path="/myCanvas" component={MyCanvas}/>
                <Route path="/pictures" component={Pictures}/>
            </Router>
        </div>
    );
};

export default App;