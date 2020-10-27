import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const roles = {
  DEVELOPER: {
    longName: 'Developer',
    shortName: 'DEV',
  },
  PRODUCT_OWNER: {
    longName: 'Product Owner',
    shortName: 'PO',
  },
  QA: {
    longName: 'QA',
    shortName: 'QA',
  },
  SCRUM_MASTER: {
    longName: 'Scrum Master',
    shortName: 'SM',
  },
};

const RoleSelect = ({ onSelectRole, selectedRole }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Object.keys(roles).map((role) => (
        <Chip
          color={selectedRole === role ? 'primary' : 'default'}
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
