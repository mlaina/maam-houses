import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../components/Fondo";
import cabeceraImage from "../../../public/images/LOGO_MAAM.svg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BuildIcon from '@material-ui/icons/Build';
import Avatar from '@material-ui/core/Avatar';
import {Box} from "@material-ui/core";

import who from "../../../public/images/maam-init/who.png";
import team from "../../../public/images/maam-init/team.png";
import arquitectura from "../../../public/images/maam-init/arquitectura.png";
import arquitectura2 from "../../../public/images/maam-init/arquitectura2.png";
import inmobiliaria from "../../../public/images/maam-init/inmobiliaria.png";
import interiorismo from "../../../public/images/maam-init/interiorismo.png";
import contacto from "../../../public/images/maam-init/contacto.png";
import Link from "@material-ui/core/Link";


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
        width: "33%",
        margin: "0 33%"
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
    images: {
        width: "90%"
    },
    contacto: {
        width: "30%"
    }
}));

export default function support() {
    const classes = useStyles();
    return (
        <Fondo tipo="white" className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Box m={4}/>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.cabecera} src={cabeceraImage}/>
                </Grid>
                <Box m={2}/>
                 <Grid item align={"center"}>
                    <Avatar className={classes.avatar}>
                        <BuildIcon />
                    </Avatar>
                    <Typography variant="h6" className={classes.mantenimiento}>
                        Página en construcción
                    </Typography>
                 </Grid>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.images} src={who}/>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.images} src={team}/>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.images} src={arquitectura}/>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.images} src={arquitectura2}/>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.images} src={inmobiliaria}/>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.images} src={interiorismo}/>
                </Grid>
                <Grid item xs={12} align={"center"}>
                    <img className={classes.images} src={contacto}/>
                </Grid>
                {/*<Grid item xs={12} align={"center"}>*/}
                {/*    <box m={2}/>*/}
                {/*     <Typography variant="h5">*/}
                {/*         <b>Arquitectura</b>*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         Carlos Laina*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         <Link href="mailto:claina@maamhouses.com">*/}
                {/*            claina@maamhouses.com*/}
                {/*         </Link>*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         <Link href="tel:682104486">*/}
                {/*            682104486*/}
                {/*         </Link>*/}
                {/*     </Typography>*/}
                {/*     <Box m={2}/>*/}
                {/*     <Typography variant="h5">*/}
                {/*         <b>Arquitectura de Interiores</b>*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         Miriam Laina*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         <Link href="mailto:mlaina@maamhouses.com">*/}
                {/*            mlaina@maamhouses.com*/}
                {/*         </Link>*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         <Link href="tel:656402912">*/}
                {/*            656402912*/}
                {/*         </Link>*/}
                {/*     </Typography>*/}
                {/*     <Box m={2}/>*/}
                {/*     <Typography variant="h5">*/}
                {/*         <b>Inmobiliaria</b>*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         Delia Pérez*/}
                {/*     </Typography>*/}
                {/*    <Typography variant="h6">*/}
                {/*        <Link href="mailto:dperez@maamhouses.com">*/}
                {/*            dperez@maamhouses.com*/}
                {/*        </Link>*/}
                {/*    </Typography>*/}
                {/*    <Typography variant="h6">*/}
                {/*        <Link href="tel:619023155">*/}
                {/*            619023155*/}
                {/*        </Link>*/}
                {/*    </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         Isabel Carmona*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         <Link href="mailto:icarmona@maamhouses.com">*/}
                {/*            icarmona@maamhouses.com*/}
                {/*         </Link>*/}
                {/*     </Typography>*/}
                {/*     <Typography variant="h6">*/}
                {/*         <Link href="tel:636160043">*/}
                {/*            636160043*/}
                {/*         </Link>*/}
                {/*     </Typography>*/}
                {/*    <Box m={2}/>*/}
                {/*</Grid>*/}
            </Grid>
        </Fondo>
    );
}
