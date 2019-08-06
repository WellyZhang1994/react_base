import React from 'react';
import { connect } from 'react-redux';


class App extends React.Component{

    render(){
        return (
            <div className="ui container" style={{width:'100%',backgroundColor: '#12212c'}}>
                hello
            </div>
        );
    }
};

export default connect()(App);