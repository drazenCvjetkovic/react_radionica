import * as React from "react";
import {ErrorMessage, Field, FieldProps} from "formik";
import {TextField} from "@material-ui/core";
import {IInputField} from "./MyForm2/MyForm2";


export const EmailInput: React.FC<IInputField>  = (props) => {
    return (
        <>
            <Field name={props.name}

                   render={({field, form}:FieldProps) => {

                       return (<TextField
                           {...props}
                           value={field.value || ''}
                           onChange={field.onChange}
                           type={'email'}
                           variant={"outlined"}
                           margin={'normal'}
                           error={form.touched[field.name] && !!form.errors[field.name]}
                       />)}
                   }
            />
            <div style={{color:'red'}}>
                <ErrorMessage
                    name={props.name}
                    component={'div'}
                />
            </div>
        </>
    )
};
