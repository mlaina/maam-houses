import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './logo.css';
import { BrowserRouter  as Router } from 'react-router-dom';
import Styles from "./Styles";
import Routes from "./Routes";



class App extends React.Component {

    render() {
        return (
            <Router>
                <Styles>
                    <Routes/>
                </Styles>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);