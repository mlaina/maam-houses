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
        maxWidth:"100%",
        maxHeight:"100%"
    },
    service: {
        width: "30em",
        padding: "2em",
        borderRadius: "40px",
        '&:hover': {
            webkitBoxShadow: "0 5px 5px #aaa",  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
            mozBoxShadow: "0 5px 5px #aaa",  /* Firefox 3.5 - 3.6 */
            boxShadow: "0 5px 5px #aaa"
        }
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
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.detalle}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
}
