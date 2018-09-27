import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import withAuth from '../Auth/withAuth';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

};

function Home(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" component="h2">
          {props.name}
        </Typography>
        <Typography component="p">
          {props.user1}
        </Typography>
        <Typography component="p">
          {props.user2}
        </Typography>

      </CardContent>
      <CardActions>
        <Link to={`/teams/${props.id}`}  size="small" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" className={classes.button} >
            En savoir plus
          </Button>

        </Link>
      </CardActions>
    </Card>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withAuth(withStyles(styles)(Home));
