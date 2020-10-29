import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import socket from '../../socket';

const Session = () => {
  const { sessionCode } = useParams();

  useEffect(() => {
    const name = window.sessionStorage.getItem('name');
    const role = window.sessionStorage.getItem('role');

    socket.on('refresh', (data) => console.log(data));

    socket.emit('join session', { name, role, sessionCode }, () => {
      console.log('Invalid session');
    });
  }, [sessionCode]);

  return <div>Session</div>;
};

export default Session;
