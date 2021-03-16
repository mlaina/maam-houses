import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fondo from "../../../components/Fondo";
import estudio1 from "../../../../public/images/estudio/estudio1.png";
import estudio2 from "../../../../public/images/estudio/estudio2.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Atras from "../../../components/Atras";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
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
        height: "100%",
        width: "100%"
    },
    mate: {
        width: "15em",
        padding: "2em",
        transition: 'box-shadow .5s',
        borderRadius: "20px",
        '&:hover': {
            webkitBoxShadow: "0 5px 5px #aaa",  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
            mozBoxShadow: "0 5px 5px #aaa",  /* Firefox 3.5 - 3.6 */
            boxShadow: "0 5px 5px #aaa"
        }
    }
}));

export default function Mate(props) {
    const classes = useStyles();

    return (
        <Link to={props.to}>
            <div className={classes.mate}>
                <div>
                    <img className={classes.media} src={props.img}/>
                    <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.nombre}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.labor}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
}
