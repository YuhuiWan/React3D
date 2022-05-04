import * as React from "react";
import Image from "./components/Image";
import { MyCanvas } from "./components/MyCanvas";
import Pictures from "./components/Pictures";

const App = () => {
    return (<div>
        <MyCanvas />
        <Pictures />
    </div>);
};

export default App;