import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        const {classes} = this.props
        return(
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>網頁封面照片</Paper>
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
        )
    }
}

const styles = theme => ({
      paper: {
        margin: '5px',
        padding: '30px',
        textAlign: 'center',
        color: "red"
      }
  });

export default connect()(withStyles(styles)(Home));