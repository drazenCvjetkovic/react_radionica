import * as React from "react";
import {createStyles} from "@material-ui/core";

const MyFormStyle = () =>
    createStyles({
        inputField: {
            marginTop: 30,
            width: "-webkit-fill-available",
            marginLeft: 20,
            marginRight: 20

        },
        button: {
            marginTop: 20,
            marginBottom: 30,
            backgroundColor: "red",
            color: "white"
        },
        card: {
            alignItems: "center",
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto"
        },
        selectWrapper: {
            minWidth: 120,
        },
        error: {
            color: "red"
        }
    });


export default MyFormStyle;