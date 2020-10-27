import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import Buttons from '../components/Buttons';

const LandingPage = () => {
  return (
    <>
      <Typography align="center" gutterBottom>
        Start by creating or joining a session.
      </Typography>
      <Buttons>
        <Button
          color="primary"
          component={Link}
          size="large"
          to="/session/create"
          variant="contained"
        >
          Create
        </Button>
        <Button
          component={Link}
          size="large"
          to="/session/join"
          variant="contained"
        >
          Join
        </Button>
      </Buttons>
    </>
  );
};

export default LandingPage;
