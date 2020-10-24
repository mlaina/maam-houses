import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Servicio from "../../components/Servicio";
import Atras from "../../components/Atras";
import Footer from "../../components/Footer";

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
    container:{
        paddingTop:"1em",
        height:"100%",
        width:"100%"
    },
    item:{
        padding: theme.spacing(2)
    }
}));

export default function what() {
    const classes = useStyles();

    return (
        <Fondo tipo="white">
            <Atras/>
            <Grid container spacing={4} justify="space-around" alignItems="center" className={classes.container}>
                <Grid item xs={12} className={classes.item}>
                    <Typography variant="h6" color={"primary"} align={"center"}>
                        qué hacemos?
                    </Typography>
                    <Typography variant="h4" color={"primary"} align={"center"}>
                        -
                    </Typography>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Casas"} servicio={"casas"} texto={"Captación de pisos y viviendas unifamiliares para venta"}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Terrenos"} servicio={"terrenos"} texto={"Captación de terrenos urbanos para la venta"}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Decoración"} servicio={"decoracion"} texto={"Proyectos de decoración para propietarios y empresa"}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Home Staging"} servicio={"home"} texto={"Decoración ocasional para facilitar la venta de un inmueble tanto de particulares como para empresas promotoras"}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Reformas"} servicio={"reformas"} texto={"Proyectos y ejecución de reformas interismo como integrales. Adaptación de viviendas a las nuevas exigencias de la normativa en eficiencia energética"}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Arquitectura"} servicio={"arquitectura"} texto={"Proyectos de arquitectura para todo tipo de edificios. Diseno de construcciones ecológicas y sostenibles. Gestion tramitación de permisos consultas y licencias"}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Viviendas Industrializadas"} servicio={"industrial"} texto={"Proyecto y gestión de la fabricación de casas industrializadas y prefabricadas"}/>
                </Grid>
                <Grid item className={classes.item}>
                    <Servicio titulo={"Diseño de Producto"} servicio={"producto"} texto={"Diseño de mobiliario adecuado al gusto del cliente y transformación de muebles"}/>
                </Grid>
            </Grid>
        </Fondo>
    );
}
