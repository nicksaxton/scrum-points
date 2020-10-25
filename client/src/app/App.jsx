import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
  buttons: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      className={classes.root}
      container
      justify="center"
      spacing={2}
    >
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper} elevation={3} padding={2}>
          <Typography align="center" gutterBottom variant="h3">
            Scrum Points
          </Typography>
          <Typography align="center" gutterBottom>
            Start by creating or joining a session.
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              color="primary"
              size="large"
              variant="contained"
            >
              Create
            </Button>
            <Button className={classes.button} size="large" variant="contained">
              Join
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
