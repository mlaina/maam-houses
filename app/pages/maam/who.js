import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import estudio1 from "../../../public/images/estudio/estudio1.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {whoImg} from "./controllers/ImageController";

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
        width: "40em"
    },
    texto:{
        padding: theme.spacing(1),
        textAlign: "end"
    },
    container:{
        paddingTop:"1em",
        height:"100%",
        width:"100%"
    }
}));

export default function who() {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={classes.container}>
            <Grid item xs={3}/>
            <Grid item xs={9}>
                <Typography variant="h4" color={"primary"} align={"left"}>
                    ¿Quiénes somos?
                </Typography>
                <Typography variant="h2" color={"primary"} align={"left"}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={3}/>
            <Grid item xs={3}>
                <p className={classes.texto}>
                    <b>Maam Arte y Arquitectura</b> S.L, nace <b>2003</b> con el desarrollo de   actividades artísticas y proyectos de arquitectura como actividad fundamental.
                </p>
                <p className={classes.texto}>
                    En el <b>2015</b>, Maam desarrolla su actividad en <b>México</b> colaborando con el Estudio LAM Arquitectos
                </p>
                <p className={classes.texto}>
                    En <b>2018</b>, en España, Maam toma un nuevo rumbo centrando su actividad en el campo residencial, poniendo el foco en el desarrollo de la <b>arquitectura industrializada, ecoeficiente y saludable</b>.
                </p>
                <p className={classes.texto}>
                    En <b>2020</b> Maam <b>une la experiencia inmobiliaria a la arquitectónica</b> para dar un <b>servicio integral</b> como respuesta a la demanda creciente del mercado en los productos de edificación residencial unifamiliar.
                </p>
            </Grid>
            <Grid item xs={6}>
                <img src={whoImg()} className={classes.estudio}/>
            </Grid>
        </Grid>
    );
}
