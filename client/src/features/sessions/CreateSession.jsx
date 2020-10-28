import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Buttons from '../../components/Buttons';
import RoleSelect from '../../components/RoleSelect';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
  },
  input: {
    marginBottom: theme.spacing(1.5),
  },
}));

const CreateSession = () => {
  const { errors, handleSubmit, register } = useForm();
  const classes = useStyles();

  const [invalidRole, setInvalidRole] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const onSelectRole = (role) => {
    setSelectedRole(role);
    setInvalidRole(false);
  };

  const onSubmit = (values) => {
    if (!selectedRole) {
      setInvalidRole(true);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" gutterBottom variant="h5">
          Create a session
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={classes.input}
            error={!!errors.name}
            fullWidth
            helperText={errors.name?.message}
            inputRef={register({ required: 'This field is required.' })}
            label="Your Name"
            margin="normal"
            name="name"
          />
          <Typography
            color={invalidRole ? 'error' : 'initial'}
            variant="caption"
          >
            Select your role below
          </Typography>
          <RoleSelect
            error={invalidRole}
            selectedRole={selectedRole}
            onSelectRole={onSelectRole}
          />
          <Buttons>
            <Button color="primary" type="submit" variant="contained">
              Create
            </Button>
            <Button component={Link} to="/" type="button" variant="contained">
              Cancel
            </Button>
          </Buttons>
        </form>
      </Grid>
    </Grid>
  );
};

export default CreateSession;
