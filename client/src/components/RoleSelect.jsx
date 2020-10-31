import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

import roles from '../roles';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(0.5),
    '& > *': {
      margin: theme.spacing(0.5),
    },
    '& > *:first-child': {
      marginLeft: 0,
    },
  },
}));

const RoleSelect = ({ error, onSelectRole, selectedRole }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(roles).map((role) => (
        <Chip
          color={
            selectedRole === role ? 'primary' : error ? 'secondary' : 'default'
          }
          key={roles[role].shortName}
          label={roles[role].longName}
          variant={selectedRole === role ? 'default' : 'outlined'}
          onClick={() => onSelectRole(role)}
        />
      ))}
    </div>
  );
};

export default RoleSelect;
