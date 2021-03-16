import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" >
            {'Copyright © '}
            <Link color="inherit" href="https://virtualdesk.es/">
                maamhouses.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexDirection: 'column',
        minHeight: '100vh',
        bottom: 0,
        position: 'relative',
        width: '100%',
        zIndex: 0
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography >
                        <b>MAAM Arte y Arquitectura S.L</b>
                        <br/>
                        C/ Antonio Machado, 4 Becerril de la sierra 28490 Madrid
                        <br/>
                        Telf.: <b>918556046</b>. Email: <b>inmobiliaria.maam@gmail.com</b>
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}