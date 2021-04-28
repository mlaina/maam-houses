import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/errors/PageNotFound";
import support from "./pages/maam/support";
import home from "./pages/maam/home";
import Service from "./pages/maam/servicios/Service";


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={support}/>
                <Route exact path="/test" component={home}/>
                <Route exact path="/diseno" component={Service}/>
                <Route exact path="/arquitectura" component={Service}/>
                <Route exact path="/interiorismo" component={Service}/>
                <Route exact path="/inmobiliaria" component={Service}/>
                <Route component={PageNotFound}/>)
            </Switch>
        );
    }
}


export default Routes;