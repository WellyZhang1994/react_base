import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Lecture2 from '../../../static/Lecture2.jpeg'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class Lecture extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
          }
    }

    render(){
        const { classes } = this.props
        const { expanded } = this.state
        return(
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                    <Grid container >
                        <Grid  xs={12} >
                            <p className={classes.title}>{"講座資訊"}</p>
                        </Grid>
                        <Grid  xs={12} >
                            <Divider className={classes.divider} variant="middle" />
                        </Grid>

                        <Grid 
                          container
                          justify="center"
                          spacing={2}
                        >
                            <Grid item xs={12} sm={4} className={classes.grid} >
                                <Card className={classes.card}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            L
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                        }
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={Lecture2}
                                        title="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                            })}
                                            onClick={()=> this.setState({expanded:!this.state.expanded})}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                    <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                    </CardContent>
                                </Collapse>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.grid}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            L
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                        }
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={Lecture2}
                                        title="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                            })}
                                            onClick={()=> this.setState({expanded:!this.state.expanded})}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                    <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                    </CardContent>
                                </Collapse>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4} className={classes.grid}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            L
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                        }
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={Lecture2}
                                        title="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                            })}
                                            onClick={()=> this.setState({expanded:!this.state.expanded})}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                    <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                    </CardContent>
                                </Collapse>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid 
                          container
                          justify="center"
                          spacing={2}
                        >
                            <Grid item xs={12} sm={4} className={classes.grid}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            L
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                        }
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={Lecture2}
                                        title="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                            })}
                                            onClick={()=> this.setState({expanded:!this.state.expanded})}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                    <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                    </CardContent>
                                </Collapse>
                                </Card>
                            </Grid>
                        <Grid item xs={12} sm={4} className={classes.grid}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        L
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Lecture2}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                        })}
                                        onClick={()=> this.setState({expanded:!this.state.expanded})}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                                </CardContent>
                            </Collapse>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.grid}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        L
                                    </Avatar>
                                    }
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={Lecture2}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                        })}
                                        onClick={()=> this.setState({expanded:!this.state.expanded})}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                                </CardContent>
                            </Collapse>
                            </Card>
                        </Grid>
                        </Grid>
                    </Grid>
            </Container>
        )
    }
}
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    title:{
        color:"#566c83",
        fontSize:"20px",
        fontWeight: 'bold',
        textAlign:"center",
        marginTop:"50px"
    },
    row:{
        backgroundColor:"#566c83"
    },
    cellh:{
        color:"white",
        fontSize:"16px",
        fontWeight: 'bold',
        
    },
    card: {
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    grid:{
        marginBottom:"10px",
        marginTop:"10px"
    },
    divider:{
        backgroundColor:"teal",
        height:"5px",
        marginBottom:"15px"
    }
  });

const mapStateToProps = (state) =>{
    return {
        allForms : state.allForm
    }
}
export default connect(mapStateToProps, {  })
(withStyles(styles)(Lecture));