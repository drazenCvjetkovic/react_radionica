import * as React from "react";
import {AppBar, createStyles, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            alignItems: "center",
            marginBottom: 30
        },
        navbarLink: {
            textDecorationLine: 'none',
            padding: 20,
            color: 'white',
        },
        toolbar: {
            marginBottom: 20,
            textAlign: 'center'
        }
    })
);

function Header() {
    const classes = useStyles();

    return (
        <AppBar position={"static"} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>

                <NavLink to={"/"} className={classes.navbarLink}>
                    <Typography
                        variant={'h6'}
                    >HOME</Typography>
                </NavLink>
                <NavLink to={"/formik"} className={classes.navbarLink}>
                    <Typography
                        variant={'h6'}
                    >FORMIK</Typography>
                </NavLink>
                <NavLink to={"/my_custom_form"} className={classes.navbarLink}>
                    <Typography
                        variant={'h6'}
                    >MY CUSTOM FORM</Typography></NavLink>
                <NavLink to={"/list"} className={classes.navbarLink}>
                    <Typography
                        variant={'h6'}
                    >LIST</Typography></NavLink>

            </Toolbar>
        </AppBar>
    )
}

export default Header;
