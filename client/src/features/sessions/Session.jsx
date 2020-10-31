import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Participants from './Participants';

import socket from '../../socket';

const Session = () => {
  const history = useHistory();
  const { sessionCode } = useParams();

  const [invalidSession, setInvalidSession] = useState(false);
  const [loading, setLoading] = useState(false);
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    setLoading(true);

    const name = window.sessionStorage.getItem('name');
    const role = window.sessionStorage.getItem('role');

    socket.on('refresh', (data) => setRoomData(data));

    socket.emit('join session', { name, role, sessionCode }, () => {
      setInvalidSession(true);
    });

    setLoading(false);
  }, [sessionCode]);

  if (loading && !roomData) {
    return null;
  }

  if (invalidSession) {
    return (
      <Alert
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => history.push('/')}
          >
            Go Back
          </Button>
        }
        severity="error"
      >
        Session {sessionCode} does not exist.
      </Alert>
    );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" gutterBottom variant="h5">
          Session {sessionCode}
        </Typography>
        <Participants participants={roomData?.participants} />
      </Grid>
    </Grid>
  );
};

export default Session;
