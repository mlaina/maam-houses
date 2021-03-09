import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import decoracion from "../../public/images/servicios/decoracion.jpg";
import casas from "../../public/images/servicios/casas.jpg";
import terrenos from "../../public/images/servicios/terrenos.jpg";
import home from "../../public/images/servicios/home.jpg";
import reformas from "../../public/images/servicios/reformas.jpg";
import arquitectura from "../../public/images/servicios/arquitectura.jpg";
import industrial from "../../public/images/servicios/industrial.jpg";
import producto from "../../public/images/servicios/producto.jpg";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme)=>({
    root: {
        width: 600
    },
    tarjeta: {
        width: 320
    },
    enlace:{
        textDecoration:"none!important"
    },
    media: {
        height: 400,
    },
}));

function imagenes(serv){
    switch (serv) {
        case "decoracion": return decoracion;
        case "casas": return casas;
        case "terrenos": return terrenos;
        case "home": return home;
        case "reformas": return reformas;
        case "arquitectura": return arquitectura;
        case "industrial": return industrial;
        case "producto": return producto;
    }
}

export default function Servicio(props) {
    const classes = useStyles();
    let imagen = imagenes(props.servicio);
    let tarjeta = classes.root;
    if(window.innerWidth < 600) {
        tarjeta=classes.tarjeta;
    }
    return (
        <Link to={props.servicio} className={classes.enlace}>
            <Card className={tarjeta}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imagen}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.titulo}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.texto}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
