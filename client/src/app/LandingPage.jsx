import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Buttons from '../components/Buttons';

const LandingPage = () => {
  return (
    <>
      <Typography align="center" gutterBottom>
        Start by creating or joining a session.
      </Typography>
      <Buttons>
        <Button color="primary" size="large" variant="contained">
          Create
        </Button>
        <Button size="large" variant="contained">
          Join
        </Button>
      </Buttons>
    </>
  );
};

export default LandingPage;
