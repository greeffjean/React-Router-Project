import React from 'react';
import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import '../css/Night.scss';


class Night extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    active() {
        this.props.nightActive()
    }

    /* Render */
    render() {
        var background = '/img/night.jpg';

        return (
            <div style={{
                position: "absolute", width: "100%", height: "100%", backgroundImage: `url(${background})`, backgroundSize: "cover",
            }} >
                <div className="tint" style={{
                    position: "absolute", width: "100%", height: "100%", display: "flex",
                    flexDirection: "column", justifyContent: "center", alignItems: "center", background: "hsla(0, 0%, 0%, 0.22)"
                }}>
                    <h1 style={{ fontSize: "5rem", fontFamily: "Oswald", color: "white", margin: "0.5rem", fontWeight: "bold", letterSpacing: "3px" }}>This is Night</h1>
                    <h3 style={{ fontSize: "2rem", fontFamily: "Oswald", color: "white", margin: "0.5rem", fontWeight: "300", letterSpacing: "5px" }}> Experience the silence and spacioussness of Night </h3>

                    <div>
                        <NavLink  to="/night"> <button>Egyptian Desert</button> </NavLink>
                        <NavLink  to="/night/gibber-desert"> <button>Gibber Desert</button> </NavLink>
                        <NavLink  to="/night/sahara-desert"> <button>Sahara Desert</button> </NavLink>
                    </div>

                    <div className="display_area_night">


                        <Switch location={this.props.location} >
                            <Route exact path="/night" component={() => <div className="circle_img one"></div>} />
                            <Route path="/night/gibber-desert" component={() => <div className="circle_img two"></div>} />
                            <Route path="/night/sahara-desert" component={() => <div className="circle_img three"></div>} />
                        </Switch>





                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(Night);



