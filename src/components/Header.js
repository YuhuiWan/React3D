import * as React from "react";
import { Link } from "wouter";

const Header = () => {
    return <ul>
        <Link to="/index">{"home"}</Link>
    </ul>
};

export default Header;