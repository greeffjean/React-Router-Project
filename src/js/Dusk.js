import React from 'react';


class Dusk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    /* Render */
    render() {
        var background = '/img/dusk.jpg';

        return (
            <div style={{
                position: "absolute", width: "100%", height: "100%", backgroundImage: `url(${background})`,backgroundSize: "cover", }} >
                <div className="tint" style={{position: "absolute", width: "100%", height: "100%", display: "flex", 
                flexDirection: "column", justifyContent: "center", alignItems: "center", background: "hsla(0, 0%, 0%, 0.22)"}}>
                    <h1 style={{ fontSize: "5rem", fontFamily: "Oswald", color: "white", margin: "0.5rem", fontWeight: "bold", letterSpacing: "3px" }}>This is Dusk</h1>
                    <h3 style={{ fontSize: "2rem", fontFamily: "Oswald", color: "white", margin: "0.5rem", fontWeight: "300", letterSpacing: "5px" }}> Experience the silence and spacioussness of Dusk </h3>
                </div>
            </div>
        );
    }

}

export default Dusk;



