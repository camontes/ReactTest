import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import HeaderContainer from '../containers/HeaderContainer';
import ConverterPage from '../pages/Converter/ConverterPage';
import RequestPage from '../pages/Request/RequestPage';
import ShowRequestPage from '../pages/Request/ShowRequestPage';
import Home from './Home';


const App = () =>{

    return (
        <Router history={history}>
            <div>
                <HeaderContainer />
                <Switch>
                    <Route path="/" exact component = {Home}/>
                    <Route path="/Request/:currency/:criptoCurrency/:value/:result" exact component = {RequestPage}/>
                    <Route path="/showRequest" exact component = {ShowRequestPage}/>
                    <Route path="/conversor" exact component = {ConverterPage}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;