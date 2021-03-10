import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
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
        maxHeight:"25em"
    },
    service: {
        height: "29em",
        padding: "1em 0.5em",
        transition: 'box-shadow .5s',
        borderRadius: "20px",
        '&:hover': {
            transform: "translate3d(0, 0, 0)",
            animation: "zoomin 1s ease",
            webkitBoxShadow: "0 5px 5px #aaa",
            mozBoxShadow: "0 5px 5px #aaa",
            boxShadow: "0 5px 5px #aaa"
        }
    },
    text:{
        minWidth: 0
    }
}));

export default function Service(props) {
    const classes = useStyles();

    return (
        <Link to={props.to}>
            <div className={classes.service}>
                <div>
                    <img className={classes.media} src={props.img}/>
                    <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.titulo}
                        </Typography>
                        <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                            {props.detalle}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
}
