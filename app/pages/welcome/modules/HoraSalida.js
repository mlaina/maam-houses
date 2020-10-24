import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "@material-ui/core/Checkbox";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  miestilo: {
    padding: "18.5px",
  },
  button: {
    margin: theme.spacing(0.8),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function PantallaHoraSalida() {
  const classes = useStyles();

  const [, setValue] = React.useState("female");
  const variasClases = classNames("centrarBotones", "ajustarMargenXL");

  return (
    <Grid container spacing={3} className="contenedor">
      <Grid item xs={12}>
        <Typography variant="h4" color="primary" className="centrar">
          ¿A qué hora te vas?
        </Typography>
      </Grid>
      <Grid item xs={12} className="centrarBotones">
        <TextField
          id="time"
          type="time"
          defaultValue="09:19"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </Grid>
      <Grid item xs={12} className={variasClases}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<FontAwesomeIcon icon={faFireAlt} className="fa-lg" />}
              checkedIcon={
                <FontAwesomeIcon icon={faFireAlt} className="fa-lg" />
              }
              name="checkedH"
            />
          }
          label="HOY SE LÍA"
        />
        <p className="txtInfo"></p>
      </Grid>
    </Grid>
  );
}
