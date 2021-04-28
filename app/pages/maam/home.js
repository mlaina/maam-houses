import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import maam from "../../../public/images/maam.svg";
import Grid from "@material-ui/core/Grid";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Button from "@material-ui/core/Button";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Typography from "@material-ui/core/Typography";
import KingBedIcon from '@material-ui/icons/KingBed';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        overflow: "hidden"
    },
    media: {
        width: "30%",
        margin: "0 35%",
        [theme.breakpoints.down('sm')]: {
            width: "70%",
            margin: "0 15%"
        }
    },
    but: {
        margin:"2em",
        "&:hover": {
            color: theme.palette.primary.main
        },
        [theme.breakpoints.down('sm')]: {
            margin: "2em",
        }
    },
    icons: {
        fontSize: "7.5em",
        [theme.breakpoints.down('sm')]: {
            fontSize: "5em",
        }
    },
    group: {
        marginTop: "3em",
        [theme.breakpoints.down('sm')]: {
            marginTop: "3em",
        }
    },
    footer: {
        marginTop: "15em",
        backgroundColor: "#333",
        color: "white",
        height: "10em"
    },
}));

export default function home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify = "center">
                <Grid item xs={12}>
                    <img className={classes.media} src={maam}/>
                </Grid>
                <Grid item className={classes.group}>
                    <Button className={classes.but} href="/diseno">
                        <BubbleChartIcon className={classes.icons}/>
                        <Typography align={"center"}><b>Diseño</b></Typography>
                    </Button>
                    <Button className={classes.but} href="/arquitectura">
                        <AccountBalanceIcon className={classes.icons}/>
                        <Typography align={"center"}><b>Arquitectura</b></Typography>
                    </Button>
                    <Button className={classes.but} href="/inmobiliaria">
                        <HomeWorkIcon className={classes.icons}/>
                        <Typography align={"center"}><b>Inmobiliaria</b></Typography>
                    </Button>
                    <Button className={classes.but} href="/interiorismo">
                        <KingBedIcon className={classes.icons}/>
                        <Typography align={"center"}><b>Interiorismo</b></Typography>
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.footer}>
                    <Typography align={"center"}><b>Contacto</b></Typography>
                </Grid>
            </Grid>
        </div>
    );
}
