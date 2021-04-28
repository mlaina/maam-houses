import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import maam from "../../public/images/LOGO_MAAM.svg";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    media: {
        width: "70%",
        marginLeft: "15%",
        marginRight: "15%",
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    }
}));

export default function index(){
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                <ListItem button key={"arquitectura"}>
                    <ListItemText primary={"Arquitectura"} />
                </ListItem>
                <ListItem button key={"obra_nueva"}>
                    <ListItemText secondary={"Obra Nueva"} />
                </ListItem>
                <ListItem button key={"vivienda_unifamiliar"}>
                    <ListItemText secondary={"Vivienda Unifamiliar"} />
                </ListItem>
                <ListItem button key={"rehabilitacion_energetica"}>
                    <ListItemText secondary={"Rehabilitación Energética"} />
                </ListItem>
                <ListItem button key={"proyectos_internacionales"}>
                    <ListItemText secondary={"Proyectos Internacionales"} />
                </ListItem>
                <ListItem button key={"proyectos_nacionales"}>
                    <ListItemText secondary={"Proyectos Nacionales"} />
                </ListItem>
                <ListItem button key={"vivienda_industrializada"}>
                    <ListItemText secondary={"Vivienda Industrializada"} />
                </ListItem>
                <ListItem button key={"inmobiliaria"}>
                    <ListItemText primary={"Inmobiliaria"} />
                </ListItem>
                <ListItem button key={"casas"}>
                    <ListItemText secondary={"Casas"} />
                </ListItem>
                <ListItem button key={"terrenos"}>
                    <ListItemText secondary={"Terrenos"} />
                </ListItem>
                <ListItem button key={"home_staging"}>
                    <ListItemText secondary={"Home Staging"} />
                </ListItem>
                <ListItem button key={"diseno"}>
                    <ListItemText primary={"Diseño"} />
                </ListItem>
                <ListItem button key={"diseno_producto"}>
                    <ListItemText secondary={"Diseño de Producto"} />
                </ListItem>
                <ListItem button key={"diseno_grafico"}>
                    <ListItemText secondary={"Diseño Gráfico"} />
                </ListItem>
                <ListItem button key={"interiorismo"}>
                    <ListItemText primary={"Interiorismo"} />
                </ListItem>
            </List>
            <div className={classes.toolbar} />
            <div className={classes.toolbar} />
            <Link href={"/"}>
                <img className={classes.media} src={maam}/>
            </Link>
        </div>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor='left'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}