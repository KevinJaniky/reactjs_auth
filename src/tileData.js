import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TestIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from 'react-router-dom';


export const mailFolderListItems = (
  <div>
    <Link to="/teams">
      <ListItem button>
        <ListItemIcon>
          <TestIcon />
        </ListItemIcon>
        <ListItemText primary="Equipes" />
      </ListItem>
    </Link>
    <Link to="/matches">
      <ListItem button>
        <ListItemIcon>
          <TestIcon />
        </ListItemIcon>
        <ListItemText primary="Equipes" />
      </ListItem>
    </Link>

  </div>
);
