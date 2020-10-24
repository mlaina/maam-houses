import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {isLogged} from "./Session";
import home from "./pages/maam/home";
import PageNotFound from "./pages/errors/PageNotFound";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Who from "./pages/maam/who";
import What from "./pages/maam/what";


class Routes extends Component {

    noLogged(){
        return (
            <Switch>
                <Route exact path="/" component={home}/>
                <Route path="/who" component={Who}/>
                <Route path="/what" component={What}/>
                <Route component={PageNotFound}/>)
            </Switch>
        )
    }

    logged(){
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route component={PageNotFound}/>)
            </Switch>
        )
    }

    render() {
        if (isLogged)
            return this.logged();

        return this.noLogged();
    }
}


export default Routes;