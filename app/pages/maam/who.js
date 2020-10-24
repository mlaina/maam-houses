import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import estudio1 from "../../../public/images/estudio/estudio1.png";
import estudio2 from "../../../public/images/estudio/estudio2.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
    estudioMobile: {
        width: 300
    },
    estudio: {
        padding: theme.spacing(2),
        width: 300
    },
    texto:{
        padding: theme.spacing(1)
    },
    container:{
        paddingTop:"1em",
        height:"100%",
        width:"100%"
    }
}));

function normal(classes){
    return (
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1} className={classes.container}>
            <Grid item xs={2}/>
            <Grid item xs={4}>
                <Typography variant="h6" color={"primary"} align={"left"}>
                    quiénes somos?
                </Typography>
                <Typography variant="h4" color={"primary"} align={"left"}>
                    -
                </Typography>
                <p className={classes.texto}>
                    Maam Inmobiliaria está formada por un equipo de profesionales con experiencia y formación en una gran compañía internacional.
                </p>
                <p className={classes.texto}>
                    Esta experiencia nos ha demostrado la demanda de un servicio más personalizado, cercano y completo en el sector.
                </p>
                <p className={classes.texto}>
                    Por eso Maam Inmobiliaria nace con la idea de entender y atender las dudas y necesidades que surgen en el desarrollo de un proyecto inmobiliario.
                </p>
            </Grid>
            <Grid item xs={4}>
                <img src={estudio1} className={classes.estudio}/>
                <img src={estudio2} className={classes.estudio}/>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    );
}


function mobile(classes){
    let imagen=classes.estudioMobile;
    return (
        <Grid container direction="row" justify="space-around" alignItems="baseline" spacing={1} className={classes.container}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Typography variant="h6" color={"primary"} align={"center"}>
                    quiénes somos?
                </Typography>
                <Typography variant="h4" color={"primary"} align={"center"}>
                    -
                </Typography>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <p className={classes.texto}>
                    Maam Inmobiliaria está formada por un equipo de profesionales con experiencia y formación en una gran compañía internacional.
                </p>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <img src={estudio1} className={imagen}/>

            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <p className={classes.texto}>
                    Esta experiencia nos ha demostrado la demanda de un servicio más personalizado, cercano y completo en el sector.
                </p>
                <p className={classes.texto}>
                    Por eso Maam Inmobiliaria nace con la idea de entender y atender las dudas y necesidades que surgen en el desarrollo de un proyecto inmobiliario.
                </p>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <img src={estudio2} className={imagen}/>
            </Grid>
        </Grid>
    );
}

function responsive(classes){
    if(window.innerWidth < 400){
        return mobile(classes);
    }
    return normal(classes);
}


export default function who() {
    const classes = useStyles();

    return (
        <Fondo tipo="white">
            <Atras/>
            {responsive(classes)}
        </Fondo>
    );
}
