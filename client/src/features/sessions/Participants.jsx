import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useMemo } from 'react';

import roles from '../../roles';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Participants = ({ participants }) => {
  const classes = useStyles();

  const sortedParticipants = useMemo(() => {
    return Object.values(participants).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [participants]);

  if (!participants) {
    return null;
  }

  return (
    <div className={classes.root}>
      {sortedParticipants.map((participant) => (
        <Chip
          avatar={<Avatar>{roles[participant.role].shortName}</Avatar>}
          color={participant.vote ? 'primary' : 'default'}
          key={participant.name}
          label={participant.name}
        />
      ))}
    </div>
  );
};

export default Participants;
