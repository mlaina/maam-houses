import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import cabeceraImage from "../../../public/images/CABECERA.svg";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root:{
    flexGrow: 1,
  },
  light:{
    color:theme.palette.secondary.light
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
      <Fondo tipo="welcome">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={cabeceraImage}/>
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Typography variant="h6" className={classes.light} align={"center"}>
              Donde nacen las anécdotas
            </Typography>
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={3}/>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" fullWidth
                component={Link} to="/login" className={classes.submit}>
              LogIn
            </Button>
          </Grid>
          <Grid item xs={3}/>
          <Grid item xs={3}/>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth
                component={Link} to="/register" className={classes.submit}>
              Regístrate
            </Button>
          </Grid>
          <Grid item xs={3}/>
        </Grid>
      </Fondo>
  );
}
