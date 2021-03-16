import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import estudio1 from "../../../public/images/estudio/estudio1.png";
import estudio2 from "../../../public/images/estudio/estudio2.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Atras from "../../components/Atras";
import Mate from "./components/mate";
import Arquitectura from "./services/arquitectura";
import Inmobiliaria from "./services/inmobiliaria";
import Interior from "./services/interior";
import Service from "./components/service";
import {services} from "./controllers/ImageController";

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

export default function Contact() {
    const classes = useStyles();

    return (
        <Grid container className={classes.container} spacing={3} >
            <Grid item xs={3}/>
            <Grid item xs={9}>
                <Typography variant="h4" color={"primary"} align={"left"}>
                    Contacto
                </Typography>
                <Typography variant="h2" color={"primary"} align={"left"}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography >
                    <b>ARQUITECTURA</b> CARLOS LAINA CORRAL 682104486 claina@maamhouses.com
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    <b>INTERIORISMO Y DISEÑO</b> MIRIAM LAINA PÉREZ  656402912 mlaina@maamhouses.com
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography >
                    <b>INMOBILIARIA</b> DELIA PÉREZ LAGUIA  619023155 dperez@maamhouses.com
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  align={"center"}>
                    ISABEL CARMONA DÍAZ  636160043 icarmona@maamhouses.com
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align={"center"}>
                    MAAM Arte y Arquitectura SL
                </Typography>
            </Grid>

        </Grid>
    );
}
