import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Educate extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        const {classes} = this.props
        return(
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.views}>
                        test
                    </div>
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
      },
      views:{
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:'100%',
        height:"300px"
      }
  });

export default connect()(withStyles(styles)(Educate));