import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
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
import Button from '@material-ui/core/Button';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        };
    }

    componentDidMount() {
    }

    handleToggle = () =>{
    }

    handleDrawerClose = () =>{
        this.setState({open:false})
    }
    handleDrawerOpen = () =>{
        this.setState({open:true})
    }

    render(){
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
                            <Link to="/login">
                              <Button variant="outlined" size="small" className={classes.signbutton}>
                                  Sign in
                              </Button>
                            </Link>
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
                              <Link to="/eduonline" >
                              <ListItem button key={"線上教育課程"}>
                                <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={"線上教育課程"} />
                              </ListItem>
                              </Link>
                              <Link to="/form" >
                              <ListItem button key={"問卷調查"}>
                                <ListItemIcon>{1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={"問卷調查"} />
                              </ListItem>
                              </Link>
                              <Link to="/lecture" >
                              <ListItem button key={"講座資訊"}>
                                <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={"講座資訊"} />
                              </ListItem>
                              </Link>
                              <Link to="/" >
                              <ListItem button key={"任務專區"}>
                                <ListItemIcon>{1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={"任務專區"} />
                              </ListItem>
                              </Link>
                            </List>
                            <Divider />
                            <List>
                              <Link to="/eduonline" >
                                <ListItem button key={"購物車"}>
                                  <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                  <ListItemText primary={"購物車"} />
                                </ListItem>
                              </Link>
                              <Link to="/" >
                                <ListItem button key={"線上資訊問診"}>
                                  <ListItemIcon>{1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                  <ListItemText primary={"線上資訊問診"} />
                                </ListItem>
                              </Link>
                              <Link to="/eduonline" >
                                <ListItem button key={"金流報表"}>
                                  <ListItemIcon>{0 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                  <ListItemText primary={"金流報表"} />
                                </ListItem>
                              </Link>
                              <Link to="/" >
                                <ListItem button key={"任務專區"}>
                                  <ListItemIcon>{1 % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                  <ListItemText primary={"任務專區"} />
                                </ListItem>
                                </Link>
                            </List>
                        </Drawer>
                        <main
                            className={clsx(classes.content, {
                            [classes.contentShift]: this.state.open,
                            })}
                        >
                            <div className={classes.drawerHeader} />
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
        marginTop:'20px',
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
        color:"black",
        fontFamily:"cursive",
      },
      signbutton: {
         margin:'5px'
      }
  });



export default connect()(withStyles(styles)(Header));