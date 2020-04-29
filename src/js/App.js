import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";


import '../css/App.scss';
import DisplayArea from './DisplayArea'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nightActive: false
    }
  }

  nightActive(param) {
    this.setState({
      nightActive: param
    })
  }



  /* Render */
  render() {

    return (
      <Router>

        <div className="main_wrapper" style={{ background: "black" }}>

          {/* Preloading entire App media, html is hidden not to be used */}
          <div className="preloader">
            <img src={require("../img/egypt.jpg")} />
            <img src={require("../img/sahara.jpg")} />
            <img src={require("../img/gibber.jpg")} />
            <img src={require("../img/dusk.jpg")} />
            <img src={require("../img/night.jpg")} />
          </div>
          {/* Preloading entire App media, html is hidden not to be used */}

          <div className="side_bar">
            <NavLink onClick={(e) => this.nightActive(false)} to="/"><a style={{ fontFamily: "Oswald" }} >Home</a></NavLink>
            <NavLink onClick={(e) => this.nightActive(false)} to="/dusk"><a style={{ fontFamily: "Oswald" }} >Dusk</a></NavLink>
            <NavLink onClick={(e) => this.nightActive(true)} to="/night"><a style={{ fontFamily: "Oswald" }} >Night</a></NavLink>
          </div>

          <DisplayArea nightActive={this.state.nightActive} />
        </div>
      </Router>

    );
  }

}

export default App;



