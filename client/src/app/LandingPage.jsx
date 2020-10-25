import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Buttons from '../components/Buttons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      className={classes.root}
      container
      justify="center"
      spacing={2}
    >
      <Grid item lg={4} md={5} sm={7} xs={12}>
        <Paper className={classes.paper} elevation={3} padding={2}>
          <Typography align="center" gutterBottom variant="h3">
            Scrum Points
          </Typography>
          <Typography align="center" gutterBottom>
            Start by creating or joining a session.
          </Typography>
          <Buttons>
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
          </Buttons>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
