import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withAuth from '../Auth/withAuth';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
});

const margin = {
  margin:10
};

class TeamProfilGenerale extends React.Component {





  render() {
   // console.log(this.props.data['team'].score);
    return (
      <div>
        <div className='toolbar' style={margin} />
        <Typography variant="headline" component="h2">
          {this.props.data.name}
        </Typography>
        <List component="nav">
          <ListItem button>
            <Typography  component="p">
              Joueur 1 : {this.props.data.username_1}
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button divider>
            <Typography  component="p">
              Joueur 2 : {this.props.data.username_2}
            </Typography>
          </ListItem>
          <ListItem button divider>
            <Typography  component="p">
              Score : {this.props.data.score}
            </Typography>
          </ListItem>
        </List>



      </div>
    )
  }

}
export default withAuth(withStyles(styles)(TeamProfilGenerale));

