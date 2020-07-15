import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import HeaderContainer from '../containers/HeaderContainer';
import UserCreatePage from '../pages/Users/UserCreatePage';
import UserDetailPage from '../pages/Users/UserDetailPage';
import MedicalAppointmentListPage from '../pages/MedicalAppointment/MedicalAppointmentListPage';
import Error from '../components/Error'
import MedicalAppointmentCreatePage from '../pages/MedicalAppointment/MedicalAppointmentCreatePage';
import ConverterPage from '../pages/Converter/ConverterPage';
import RequestPage from '../pages/Request/RequestPage';
import ShowRequestPage from '../pages/Request/ShowRequestPage';


const App = () =>{

    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <HeaderContainer />
                    <Switch>
                        <Route path="/Request/:currency/:criptoCurrency/:value/:result" exact component = {RequestPage}/>
                        <Route path="/showRequest" exact component = {ShowRequestPage}/>
                        <Route path="/conversor" exact component = {ConverterPage}/>
                        <Route path="/users/create" exact component = {UserCreatePage}/>
                        <Route path="/users/detail/:username" exact component = {UserDetailPage}/>
                        <Route path="/MedicalAppointment/list" exact component = {MedicalAppointmentListPage}/>
                        <Route path="/MedicalAppointment/create" exact component = {MedicalAppointmentCreatePage}/>
                        <Route path="/errors" exact component = {Error}/>
                    </Switch>
                </div>
            </Router>
        </div>

    );
}

export default App;