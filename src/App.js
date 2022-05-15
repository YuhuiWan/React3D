import * as React from "react";
import { Router, Route, Redirect } from "wouter";
import Menu from "./components/Menu";
import Image from "./components/Image";
import { MyCanvas } from "./components/MyCanvas";
import Pictures from "./components/Pictures";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import MyGallery from "./components/MyGallery";

// 所有需要路由的组件需要在下面注册，然后在menu组件里加一个入口
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
                <Route path="/gallery" component={Gallery}/>
                <Route path="/myGallery" component={MyGallery}/>
            </Router>
        </div>
    );
};

export default App;