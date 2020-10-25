import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Buttons = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default Buttons;
