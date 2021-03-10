import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import home from "./pages/maam/home";
import PageNotFound from "./pages/errors/PageNotFound";
import What from "./pages/maam/what";
import support from "./pages/maam/support";


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={support}/>
                <Route path="/test" component={home}/>
                <Route path="/what" component={What}/>
                <Route component={PageNotFound}/>)
            </Switch>
        );
    }
}


export default Routes;