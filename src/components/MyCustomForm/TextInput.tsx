import * as React from "react";
import {ErrorMessage, Field, FieldProps} from "formik";
import {createStyles, makeStyles, TextField} from "@material-ui/core";
import {IInputField} from "./MyFormInterfaces";


export interface ITextInput extends IInputField{
    margin?: 'dense' | 'normal';
}

const getStyles = makeStyles(() =>
    createStyles({

        error: {
            color: "red"
        }
    })
);

export const TextInput = (props:ITextInput) => {
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
                        margin={props.margin ? props.margin : 'none'}

                    />)
                        :
                    (<TextField
                        {...props}
                        value={field.value || ''}
                        onChange={field.onChange}
                        type={'text'}
                        variant={"standard"}
                        margin={props.margin ? props.margin : 'none'}
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

