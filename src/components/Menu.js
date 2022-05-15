import * as React from "react";
import { Link } from "wouter";

const Menu = () => {
    return (
        <div>
            <h4>Samples</h4>
            <ul role="nav">
                <li><Link to="/image">image</Link></li>
                <li><Link to="/myCanvas">myCanvas</Link></li>
                <li><Link to="/pictures">pictures</Link></li>
                <li><Link to="/gallery">gallery</Link></li>
                <li><Link to="/myGallery">myGallery</Link></li>
            </ul>
        </div>
    );
};

export default Menu;