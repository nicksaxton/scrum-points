import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CreateSession from '../features/sessions/CreateSession';
import JoinSession from '../features/sessions/JoinSession';
import Session from '../features/sessions/Session';
import LandingPage from './LandingPage';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
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
      <Grid item lg={4} md={5} sm={7} xs={12}>
        <Paper className={classes.paper} elevation={3} padding={2}>
          <Typography align="center" gutterBottom variant="h3">
            Scrum Points
          </Typography>
          <Router>
            <Switch>
              <Route path="/session/create">
                <CreateSession />
              </Route>
              <Route path="/session/join">
                <JoinSession />
              </Route>
              <Route path="/session/:sessionCode">
                <Session />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Router>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
