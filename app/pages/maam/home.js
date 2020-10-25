import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import cabeceraImage from "../../../public/images/LOGO_MAAM.svg";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Footer from "../../components/Footer";
import BuildIcon from '@material-ui/icons/Build';
import Avatar from '@material-ui/core/Avatar';

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
    }
}));

export default function home() {
    const classes = useStyles();
    return (
        <Fondo tipo="white" className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.cabecera} src={cabeceraImage}/>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <Typography variant="h5" className={classes.light}>
                        | inmobiliaria |
                    </Typography>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <Avatar className={classes.avatar}>
                        <BuildIcon />
                    </Avatar>
                    <Typography variant="h6" className={classes.mantenimiento}>
                        Página en construcción
                    </Typography>
                    <Typography variant="h6">
                        Email: <b>delia@maamhouses.com</b>
                    </Typography>
                    <Typography variant="h6">
                        Telfn: <b>619023155</b>
                    </Typography>
                </Grid>
                {/*<Grid  container direction="row" justify="space-around" alignItems="flex-end" spacing={1} className={classes.links}>
                    <Grid item>
                        <Link to={"who"} className={classes.enlaces}>
                            <Typography variant="h6" color={"primary"}>¿Quiénes somos?</Typography>
                        </Link>
                        <Link to={"what"} className={classes.enlaces}>
                            <Typography variant="h6" color={"primary"}>¿Qué hacemos?</Typography>
                        </Link>
                    </Grid>
                </Grid>*/}
            </Grid>
            {/*<Footer/>*/}
        </Fondo>
    );
}
