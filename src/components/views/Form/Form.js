import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { getAllForms } from '../../../actions/form';

class Form extends React.Component{

    constructor(props) {
        super(props);
    }
    
    render(){
        const { classes, allForms } = this.props
        console.log(allForms)
        return(
            <Container component="main" maxWidth="md">

                <CssBaseline />
                <p className={classes.title}>{"問卷清單"}</p>
                <Paper className={classes.root}>
                    
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow className={classes.row}>
                            <TableCell className={classes.cellh}>Form ID</TableCell>
                            <TableCell className={classes.cellh} align="right">Name</TableCell>
                            <TableCell className={classes.cellh} align="right">Url</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {allForms.map(row => (
                            <TableRow key={row.Id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.url}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
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
          textDecorationLine: 'underline'
      },
      row:{
          backgroundColor:"#566c83"
      },
      cellh:{
          color:"white",
          fontSize:"16px",
          fontWeight: 'bold',
          
      }
  });

const mapStateToProps = (state) =>{
    return {
        allForms : state.allForm
    }
}
export default connect(mapStateToProps, { getAllForms })
(withStyles(styles)(Form));