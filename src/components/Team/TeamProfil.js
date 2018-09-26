import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import withAuth from '../Auth/withAuth';
import AuthService from "../Auth/AuthService";
import TeamProfilGenerale from "./TeamProfilGenerale";
import TeamMatche from "./TeamMatche";

const Auth = new AuthService();

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});


class TeamProfil extends React.Component {

  constructor() {
    super();
    this.state = {
      value: 0,
      hits: {
        team: {},
        matches: {},
      }
    }
  }
  componentWillMount(){
    this.getData();
  }
  getData() {
    fetch('http://127.0.0.1:8000/api/team/' + this.props.match.params.id, {
      methods: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
        "Authorization": `Bearer ${Auth.getToken()}`
      }
    }).then(response => response.json())
      .then(data => {
        this.setState({hits: data})

      })
  }

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;
    return (
      <div>
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Info"/>
            <Tab label="Matche"/>
          </Tabs>
        </Paper>
      </div>
      {value === 0 && <TeamProfilGenerale data={this.state.hits['team']} />}
      {value === 1 && <TeamMatche data={this.state.hits['matches']} selfteam={this.state.hits['team']['name']} />}
      </div>
    )
  }

}

TeamProfil.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withAuth(withStyles(styles)(TeamProfil));

