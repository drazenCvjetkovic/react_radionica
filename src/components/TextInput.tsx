import * as React from "react";
import {ErrorMessage, Field, FieldProps} from "formik";
import {createStyles, makeStyles, TextField} from "@material-ui/core";
import {IInputField} from "./MyForm2/MyFormInterfaces";

const getStyles = makeStyles(() =>
    createStyles({
        inputField: {
            marginTop: 30,
            width: "-webkit-fill-available",
            marginLeft: 20,
            marginRight: 20
        },
        error: {
            color: "red"
        }
    })
);

export const TextInput = (props:IInputField) => {
    const classes = getStyles();

    return (
        <>

            <Field name={props.name}

                render={({field, form}:FieldProps) => {

                    return props.variant ?
                    (<TextField
                        {...props}
                        value={field.value || ''}
                        onChange={field.onChange}
                        type={'text'}
                        error={form.touched[field.name] && !!form.errors[field.name]}
                        variant={"outlined"}
                    />)
                        :
                    (<TextField
                        {...props}
                        value={field.value || ''}
                        onChange={field.onChange}
                        type={'text'}
                        variant={"standard"}

                        error={form.touched[field.name] && !!form.errors[field.name]}
                    />)

                }
                }
            />


            <div className={classes.error}>
                <ErrorMessage
                    name={props.name}
                />
            </div>
        </>
    )
};

