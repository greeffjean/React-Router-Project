
import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../css/DisplayArea.scss'


import Sunrise from './Sunrise';
import Dusk from './Dusk';
import Night from './Night';



class DisplayArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }




    /* Render */
    render() {
        var currentLocation = window.location.href;
        var url = currentLocation.indexOf("night");
        console.log(url)

        return (
            <div className="display_area">
                <TransitionGroup >
                    <CSSTransition
                        key={this.props.location.key}
                        timeout={this.props.nightActive == true ? {enter: 1, exit: 300} : { enter: 300, exit: 300 }}
                        classNames="fade"
                    >
                        <Switch location={this.props.location} >
                            <Route exact path="/" component={() => <Sunrise />} />
                            <Route path="/dusk" component={() => <Dusk />} />
                            <Route path="/night" component={() => <Night />} />
                        </Switch>

                    </CSSTransition>
                </TransitionGroup>

            </div >

        );
    }

}

export default withRouter(DisplayArea);













