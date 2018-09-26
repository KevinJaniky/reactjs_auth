import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withAuth from '../Auth/withAuth';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import './TeamMatche.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});



class TeamMatche extends React.Component {


  _victory(winner,selfTeam){
    if(winner == selfTeam){
      return 'Victoire';
    }
    return 'Defaite';
  }


  render() {
    const { classes } = this.props;
    const data = this.props.data;
    console.log(data);
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Team 1 </TableCell>
                <TableCell>Team 2</TableCell>
                <TableCell  className='hidden_mobile'> Etat </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => {
                return (
                  <TableRow  className={this._victory(row.winner,this.props.selfteam)} key={row.id}>
                    <TableCell >{row.team_1}</TableCell>
                    <TableCell >{row.team_2}</TableCell>
                    <TableCell className='hidden_mobile'>{this._victory(row.winner,this.props.selfteam)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

TeamMatche.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withAuth(withStyles(styles)(TeamMatche));

