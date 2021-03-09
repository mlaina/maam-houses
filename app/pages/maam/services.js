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

export default function Services() {
    const classes = useStyles();

    return (
        <>
            <Arquitectura/>
            <Inmobiliaria/>
            <Interior/>
        </>
    );
}
