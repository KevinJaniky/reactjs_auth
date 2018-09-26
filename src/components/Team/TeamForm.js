import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withAuth from '../Auth/withAuth';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AuthService from '../Auth/AuthService';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const Auth = new AuthService();
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
});

const margin = {
  margin:'auto'
};

const padd = {
  padding:'25px'
};

const width = {
  width: '100%',
  marginBottom: '10px'
};

class TeamForm extends React.Component {

  constructor(){
    super();
    this.state = {
      j1:'',
      j2:'',
      hits:[
        {id:0,name:'None'},
        {id:1,name:'None'},
      ]
    }
    this.handleFormOnSubmit = this.handleFormOnSubmit.bind(this);
  }
  componentWillMount() {
    this.getData();
  }

  handleFormOnSubmit(){

  }

  getData() {
    fetch('http://127.0.0.1:8000/api/user', {
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={24} >
          <Grid item xs={12} md={6} style={margin}>
            <Paper className={classes.paper} style={padd}>
              <Typography variant="title" gutterBottom>
                Créer une équipe
              </Typography>
            <form className={classes.form} onSubmit={this.handleFormOnSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="nom">Nom</InputLabel>
                <Input id="nom" name="name" autoComplete="nom" autoFocus onChange={this.handleChange}/>
              </FormControl>

              <FormControl required className={classes.formControl} style={width}>
                <InputLabel htmlFor="j1">Joueur 1</InputLabel>
                <Select
                  value={this.state.j1}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'j1',
                    id: 'j1',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.state.hits.map(d =>
                    <MenuItem value={d.id}>{d.name}</MenuItem>)}
                </Select>
              </FormControl>
              <FormControl  className={classes.formControl} style={width}>
                <InputLabel htmlFor="j2">Joueur 2</InputLabel>
                <Select
                  value={this.state.j2}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'j2',
                    id: 'j2',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.state.hits.map(d =>
                    <MenuItem value={d.id}>{d.name}</MenuItem>)}
                </Select>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
              >
                Créer
              </Button>
            </form>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>


    )
  }

}

export default withAuth(withStyles(styles)(TeamForm));

