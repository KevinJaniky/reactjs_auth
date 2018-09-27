//Request test

import React, {Component} from "react";
import AuthService from "../Auth/AuthService";
import withAuth from "../Auth/withAuth";
import TeamCard from "./TeamCard";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Auth = new AuthService();
const styles = theme => ({
  root: {
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

const fabStyle = {
  position: 'absolute',
  right: '25px',
  bottom: '25px'
};

class Teams extends Component {

  constructor() {
    super();
    this.state = {
      hits: []
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.getData();
  }
  handleClick(){
    this.props.history.replace('/create/teams')
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>Les équipes</Typography>
        <div className="Teams">
          <Grid container spacing={24}>
            {this.state.hits.map(d =>
              <Grid item xs={12} sm={6} md={3}><TeamCard name={d.name} user1={d.username_1} user2={d.username_2} id={d.id}/></Grid>)}
          </Grid>
          <Button variant="fab" color="primary" aria-label="Add" style={fabStyle} onClick={this.handleClick}>
            <AddIcon/>
          </Button>
        </div>
      </div>
    )
  }

  getData() {
    fetch('http://127.0.0.1:8001/api/team', {
      methods: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:8001",
        "Authorization": `Bearer ${Auth.getToken()}`
      }
    }).then(response => response.json())
      .then(data => {
        this.setState({hits: data})
      })
  }
}

export default withAuth(Teams);
