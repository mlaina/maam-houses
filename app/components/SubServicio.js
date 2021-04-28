import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

function title(props) {
    return <Typography variant={"h3"} color={"primary"} paragraph>
        {props.title}
    </Typography>;
}

function SubServicio(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {title(props)}
        </div>
    );
}

export default SubServicio;