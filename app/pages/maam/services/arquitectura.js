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

export default function Arquitectura() {
    const classes = useStyles();

    return (
        <Grid container spacing={3} justify={"center"}>
            <Grid item xs={3}/>
            <Grid item xs={9}>
                <Typography variant="h4" color={"primary"} align={"left"}>
                    <b>Servicios</b> Arquitectura
                </Typography>
                <Typography variant="h2" color={"primary"} align={"left"}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" align={"center"}>
                    Entendemos la Arquitectura como <b>El arte de concretar las ideas e ilusiones en una construcción que responda a su función y se adapte a un presupuesto, sin perder en el proceso la potencia evocadora por la cual ha sido creada</b>.
                </Typography>
            </Grid>
            <Grid item>
                <Service img={services("obra_nueva")} titulo={"VIVIENDA UNIFAMILIAR"} detalle={"Obra nueva."}/>
            </Grid>
            <Grid item>
                <Service img={services("reformas")} titulo={"VIVIENDA UNIFAMILIAR"} detalle={"Reformas."}/>
            </Grid>
            <Grid item>
                <Service img={services("rehabilitacion")} titulo={"VIVIENDA UNIFAMILIAR"} detalle={"Rehabilitación energética."}/>
            </Grid>
            <Grid item>
                <Service img={services("proyectos_int")} titulo={"PROYECTOS INTERNACIONALES"} detalle={"Aeropuerto Internacional de Tijuana. México. Colaboración en LAM Arquitectos."}/>
            </Grid>
            <Grid item>
                <Service img={services("proyectos_nac")} titulo={"PROYECTOS NACIONALES"} detalle={"Sede Caja de Badajoz. Colaboración en Estudio Lamela."}/>
            </Grid>
            <Grid item>
                <Service img={services("vivienda_modular")} titulo={"VIVIENDA MODULAR INDUSTRIALIZADA"} detalle={"Prototipo de vivienda industrializada ecoeficiente y saludable."}/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" align={"center"}>
                    “La arquitectura modular e industrializada da respuesta a la actual demanda social por los crecientes problemas <b>derivados de los plazos de construcción, del gasto energético, respeto por el planeta y el bienestar de las personas</b>"
                </Typography>
            </Grid>
        </Grid>
    );
}
