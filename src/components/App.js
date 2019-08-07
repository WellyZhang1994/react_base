import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';

import './App.css'
class App extends React.Component{
    componentDidMount() {
        
        $(document).ready(function() {
            $('.toggle-nav').click(function(e) {
                $(this).toggleClass('active');
                $('.menu ul').toggleClass('active');
                e.preventDefault();
            });
        });
    }

    handleToggle = () =>{
        console.log("hi")
    }
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12} >
                        <nav className="menu">
                            <ul className="active">
                                <li className="current-item"><a href="#">Home</a></li>
                                <li><a href="#">My Work</a></li>
                                <li><a href="#">About Me</a></li>
                                <li><a href="#">Get in Touch</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>

                            <a className="toggle-nav" onClick={()=>{this.handleToggle()}} href="#">&#9776;</a>

                            <form className="search-form">
                                <input type="text"></input>
                                <button>Search</button>
                            </form>
                        </nav>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

const useStyles = {
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: '5px',
      padding: '30px',
      textAlign: 'center',
      color: "red"
    },
  };


export default connect()(withStyles(useStyles)(App));