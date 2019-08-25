import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import './App.css'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            open:false
        };
    }

    componentDidMount() {
        /*
        $(document).ready(function() {
            $('.toggle-nav').click(function(e) {
                $(this).toggleClass('active');
                $('.menu ul').toggleClass('active');
                e.preventDefault();
            });
        });
        */
    }

    handleToggle = () =>{
        console.log("hi")
    }

    handleDrawerClose = () =>{
        this.setState({open:false})
    }
    handleDrawerOpen = () =>{
        this.setState({open:true})
    }

    render(){
        /*
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
        */
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12} >
                    <div className={classes.root}>
                        <AppBar
                            position="fixed"
                            className={clsx(classes.appBar, {
                            [classes.appBarShift]: this.state.open,
                            })}
                        >
                            <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h2"
                                variant="h5"
                                color="inherit"
                                align="center"
                                noWrap
                                className={classes.toolbarTitle}
                            >
                                BabyHome
                            </Typography>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <Button variant="outlined" size="small">
                                Sign up
                            </Button>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="left"
                            open={this.state.open}
                            classes={{
                            paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon /> 
                            </IconButton>
                            </div>
                            <Divider />
                            <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                                </ListItem>
                            ))}
                            </List>
                            <Divider />
                            <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                                </ListItem>
                            ))}
                            </List>
                        </Drawer>
                        <main
                            className={clsx(classes.content, {
                            [classes.contentShift]: this.state.open,
                            })}
                        >
                            <div className={classes.drawerHeader} />
                            <Grid container>
                                <Grid item sm={12}>
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
                        </main>
                        
                        </div>
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
};

const drawerWidth = 240

const styles = theme => ({
    root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor:"#fff"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing.unit *2,
        color:"black"
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing.unit *3,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      paper: {
        margin: '5px',
        padding: '30px',
        textAlign: 'center',
        color: "red"
      },
      toolbarTitle: {
        flex: 1,
        color:"black"
      }
  });



export default connect()(withStyles(styles)(App));