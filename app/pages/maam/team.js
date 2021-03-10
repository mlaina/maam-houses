import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import estudio1 from "../../../public/images/estudio/estudio1.png";
import estudio2 from "../../../public/images/estudio/estudio2.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Atras from "../../components/Atras";
import Mate from "./components/mate";
import {mates} from "./controllers/ImageController";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root:{
        flexGrow: 1,
    },
    light:{
        color:theme.palette.secondary.light
    },
    estudioMobile: {
        width: 300
    },
    estudio: {
        padding: theme.spacing(2),
        width: 300
    },
    texto:{
        padding: theme.spacing(1),
        textAlign: "end"
    },
    container:{
        padding:"4em 15em"
    }
}));


export default function Team() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container} justify={"center"} spacing={6}>
            <Grid item xs={3}/>
            <Grid item xs={9}>
                <Typography variant="h4" color={"primary"} align={"left"}>
                    Equipo
                </Typography>
                <Typography variant="h2" color={"primary"} align={"left"}>
                    -
                </Typography>
            </Grid>
            <Grid item>
                <Mate img={mates("carlos")} nombre={"CARLOS LAINA CORRAL"} labor={"Arquitecto. Escuela Superior de Arquitectura de Madrid."} to={"arquitectura"}/>
            </Grid>
            <Grid item>
                <Mate img={mates("miriam")} nombre={"MIRIAM LAINA PÉREZ"} labor={"Arquitecta de Interiores. Dseñadora gráfica."} to={"interiores"}/>
            </Grid>
            <Grid item>
                <Mate img={mates("delia")} nombre={"DELIA PÉREZ LAGUIA"} labor={"Consultora inmobiliaria. Artista."} to={"inmobiliaria"}/>
            </Grid>
            <Grid item>
                <Mate img={mates("isabel")} nombre={"ISABEL CARMONA DIAZ"} labor={"Consultora inmobiliaria. Decoradora."} to={"inmobiliaria"}/>
            </Grid>
        </Grid>
    );
}
