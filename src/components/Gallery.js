import * as React from "react";

const Gallery = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <iframe
                width={"100%"}
                height={"100%"}
                title="Gallery Showroom" 
                frameborder="true"
                allowfullscreen="true"
                mozallowfullscreen={1} 
                webkitallowfullscreen={1} 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                xr-spatial-tracking={1}
                execution-while-out-of-viewport={1}
                execution-while-not-rendered={1}
                web-share={1}
                src="https://sketchfab.com/models/22b427f9480d4e31b9bfe26f19b746e1/embed"> 
            </iframe> 
        </div>
    );
};

export default Gallery;