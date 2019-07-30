import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from'./Home';
import Header from "./Header";
import ParentFormComponent from "./Formik/ParentFormComponent";
import {List as MyList} from './Formik/List'
import PresentationalComponent from "./components/MyCustomForm/PresentationalComponent";


const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header/>
            </div>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/formik" component={ParentFormComponent}/>
                    <Route path="/my_custom_form" component = {PresentationalComponent}/>
                    <Route path="/list" component = {MyList}/>

                </Switch>
            </div>
        </Router>
    );


};

export default App;
