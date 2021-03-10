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
        padding:"4em 15em"
    }
}));

export default function Inmobiliaria() {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.container} spacing={1} justify={"center"}>
                <Grid item xs={3}/>
                <Grid item xs={9}>
                    <Typography variant="h4" color={"primary"} align={"left"}>
                        <b>Servicios</b> Inmobiliaria
                    </Typography>
                    <Typography variant="h2" color={"primary"} align={"left"}>
                        -
                    </Typography>
                </Grid>
                <Grid item>
                    <Service img={services("casas")} titulo={"CASAS"} detalle={"Venta de pisos, casas, locales."}/>
                </Grid>
                <Grid item>
                    <Service img={services("terrenos")} titulo={"TERRENOS"} detalle={"Venta de solares y terrenos."}/>
                </Grid>
                <Grid item>
                    <Service img={services("home_staging")} titulo={"HOME STAGING"} detalle={"Decoración o ambientación de espacios para la sesión fotográfica."}/>
                </Grid>
            </Grid>
        </>
    );
}
