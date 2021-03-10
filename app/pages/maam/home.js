import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import maam from "../../../public/images/maam.svg";
import NavBar from "../../components/NavBar";
import Who from "./who";
import Grid from "@material-ui/core/Grid";
import Team from "./team";
import Services from "./services";
import Contact from "./contact";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root:{
        flexGrow: 1,
        overflow: "hidden"
    },
    light:{
        color:theme.palette.secondary.light,
        paddingLeft:"7.5em"
    },
    cabecera:{
        width:"90%",
        maxWidth:500
    },
    enlaces:{
        textDecoration:"none",
        textAlign:"center"
    },
    links:{
        paddingTop:"5em"
    },
    footer:{
        width:"100%"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    mantenimiento:{
        color: theme.palette.primary.main
    },
    media: {
        width: "33%",
        margin: "0 33%"
    }
}));

export default function home() {
    const classes = useStyles();
    return (
        <Fondo tipo="white" className={classes.root}>
            <NavBar/>
            <Grid container justify = "center">
                <Grid item xs={12}>
                    <img className={classes.media} src={maam}/>
                </Grid>
                <Grid item xs={12}>
                    <Who/>
                </Grid>
                <Grid item xs={12}>
                    <Team/>
                </Grid>
                <Grid item xs={12}>
                    <Services/>
                </Grid>
                <Grid item xs={12}>
                    <Contact/>
                </Grid>
            </Grid>
        </Fondo>
    );
}
