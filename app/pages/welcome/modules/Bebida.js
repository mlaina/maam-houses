import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  faGlassMartiniAlt,
  faBeer,
  faGlassWhiskey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "@material-ui/core/Checkbox";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  miestilo: {
    padding: "18.5px",
  },
  button: {
    margin: theme.spacing(1.2),
  },
  miclase: {
    marginTop: "",
  },
}));

export default function PantallaBebida() {
  const classes = useStyles();

  const [, setValue] = React.useState("female");

  const variasClases = classNames("centrarBotones");

  return (
    <Grid container spacing={3} className="contenedor">
      <Grid item xs={12}>
        <Typography variant="h4" color="primary" className="centrar">
          ¿Qué vas a beber?
        </Typography>
      </Grid>
      <Grid item xs={12} className="centrarBotones">
        <FormControl>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={
              <FontAwesomeIcon icon={faGlassMartiniAlt} className="fa-lg" />
            }
          >
            Copas
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<FontAwesomeIcon icon={faBeer} className="fa-lg" />}
          >
            Cerveza/Vino
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={
              <FontAwesomeIcon icon={faGlassWhiskey} className="fa-lg" />
            }
          >
            Sin alcohol
          </Button>
        </FormControl>
      </Grid>
      <Grid item xs={12} className={variasClases}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<DriveEtaOutlinedIcon />}
              checkedIcon={<DriveEtaIcon />}
              name="checkedC"
            />
          }
          label="CONDUZCO"
        />
        <p className="txtInfo"></p>
      </Grid>
    </Grid>
  );
}
