import { useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
  useEffect(() => {
    const socket = io();
  }, []);
};

export default useSocket;
