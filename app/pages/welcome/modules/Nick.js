import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { faMars, faVenus, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  miestilo: {
    padding: "18.5px"
  },
  button: {
    margin: theme.spacing(0.8)
  },
  centerText: {
    textAlignLast: "center"
  },

  light: {
    color: theme.palette.secondary.light,
  }
}));

export default function PantallaNick() {
  const classes = useStyles();

  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Grid container spacing={2} className="contenedor">
      <Grid item xs={12}>
        <Typography variant="h4" color="secondary" className="centrar">
          ¡Que empiece la fiesta!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          fullWidth
          required
          InputProps={{ className: classes.light }}
          placeholder="NICK DE INVITADO"
          className={classes.centerText}
        />
      </Grid>
      <Grid item xs={12} className="centrarBotones">
        <FormControl>
          <div className="centrarBotones">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FontAwesomeIcon icon={faVenus} className="fa-lg" />}
            >
              <span className="txtBoton">Femenino</span>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FontAwesomeIcon icon={faMars} className="fa-lg" />}
            >
              <span className="txtBoton">Masculino</span>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={
                <FontAwesomeIcon icon={faQuestion} className="fa-lg" />
              }
            >
              <span className="txtBoton">Otro</span>
            </Button>
          </div>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          component={Link}
          to="/login"
          fullWidth
          className={classes.miestilo}
        >
          LogIn
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
          fullWidth
          className={classes.miestilo}
        >
          Registrate
        </Button>
      </Grid>
    </Grid>
  );
}
