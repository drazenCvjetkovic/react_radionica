import * as React from "react";
import {ErrorMessage, Field, FieldProps} from "formik";
import {TextField} from "@material-ui/core";
import {IInputField} from "./MyForm2/MyForm2";

export const TextInput = (props:IInputField) => {

    return (
        <>

            <Field name={props.name}

                render={({field, form}:FieldProps) => {

                    return props.outlined ?
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
                        error={form.touched[field.name] && !!form.errors[field.name]}
                    />)

                }
                }
            />


            <div style={{color:'red'}}>
                <ErrorMessage
                    name={props.name}
                />
            </div>
        </>
    )
};

