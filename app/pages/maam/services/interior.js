import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Service from "../components/service";
import {services} from "../controllers/ImageController";
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
        paddingTop:"1em",
        height:"100%",
        width:"100%"
    }
}));

export default function Interior() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} justify={"center"}>
            <Grid item xs={3}/>
            <Grid item xs={9}>
                <Typography variant="h4" color={"primary"} align={"left"}>
                    <b>Servicios</b> Interiorismo, Diseño Gráfico y Diseño de Producto
                </Typography>
                <Typography variant="h2" color={"primary"} align={"left"}>
                    -
                </Typography>
            </Grid>
            <Grid item>
                <Service img={services("interiorismo")} titulo={"INTERIORISMO"} detalle={"Hotel en Málaga (colaboración en Proyecto Singular)."}/>
            </Grid>
            <Grid item>
                <Service img={services("diseno_grafico")} titulo={"DISEÑO GRÁFICO"} detalle={""}/>
            </Grid>
            <Grid item>
                <Service img={services("diseno_producto")} titulo={"DISEÑO DE PRODUCTO"} detalle={""}/>
            </Grid>
        </Grid>
    );
}
