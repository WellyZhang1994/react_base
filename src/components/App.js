import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { Router  , Route , Switch } from 'react-router-dom';
import History from './History';
import Home from './Home'
import Educate from './Educate'
import Login from './views/Login/Login'
import Form from './views/Form/Form'
import Lecture from './views/Lecture/Lecture'

class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div >
                <Router history={History}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/form" exact component={Form} />
                            <Route path="/eduonline" exact component={Educate} />
                            <Route path="/lecture" exact component={Lecture} />
                        </Switch>
                    </div>
                </Router>
            </div>           
        )
    }
};

export default connect()(App);