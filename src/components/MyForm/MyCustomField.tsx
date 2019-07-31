import * as React from "react";
import {createStyles, makeStyles, Switch, TextField} from "@material-ui/core";
import {FieldProps} from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface ICustomFields extends FieldProps {
    placeholder: string;
    checkbox: boolean;
    type: string;
    label: string;
}

const getStyles = makeStyles(() =>
    createStyles({
        inputField: {
            marginTop: 30,
            width: "-webkit-fill-available",
            marginLeft: 20,
            marginRight: 20
        },
    })
);

export const MyCustomField: React.FC<ICustomFields> = (props) => {
    const classes = getStyles();

    if (props.type === 'checkbox') {
        return (

            <FormControlLabel
                label={props.label}
                labelPlacement={'start'}

                control={<Switch
                    checked={props.checkbox}
                    {...props.field}/>
                }>
            </FormControlLabel>
        )
    } else if (props.type === 'password') {
        return (
            <TextField
                type={'password'}
                className={classes.inputField}
                variant={"outlined"}
                margin={'normal'}
                placeholder={props.placeholder}
                error={props.form.touched[props.field.name] && !!props.form.errors[props.field.name]}
                {...props.field}
            />
        )

    } else if (props.type === 'select') {
        return (
            <FormControl variant="outlined" className={classes.inputField}>
                <InputLabel htmlFor="gender">
                    Gender
                </InputLabel>
                <Select
                    value={props.form.values.gender}
                    input={<OutlinedInput labelWidth={50} name="gender" id="gender"/>}
                    {...props.field}
                >
                    <MenuItem value="">
                        <em>Select Gender</em>
                    </MenuItem>
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                </Select>
            </FormControl>
        )
    } else if (props.type === 'multiline') {
        return (
            <TextField
                label="About"
                multiline
                rows="4"
                className={classes.inputField}
                margin="normal"
                variant="outlined"
                {...props.field}
            />
        )
    } else {
        return (
            <TextField
                className={classes.inputField}
                variant={"outlined"}
                margin={'normal'}
                label={props.placeholder}
                placeholder={props.placeholder}
                error={props.form.touched[props.field.name] && !!props.form.errors[props.field.name]}
                {...props.field}
            />
        )
    }

};