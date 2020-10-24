import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        width: 'max-content',
    },
    icon:{
        fontSize: '15rem'
    }
}));

const PageNotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.root}>
                <Typography color={"secondary"} variant="h1">Page not found</Typography>
            </div>
            <Link to={'/'}>
                <div className={classes.root}>
                    <IconButton>
                        <FindReplaceIcon color={"secondary"} className={classes.icon}/>
                    </IconButton>
                </div>
            </Link>
        </div>

    );
};

export default PageNotFound;