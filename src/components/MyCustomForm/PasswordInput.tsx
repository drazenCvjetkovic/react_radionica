import * as React from "react";
import {ErrorMessage, Field, FieldProps} from "formik";
import {TextField} from "@material-ui/core";
import {IInputField} from "./MyFormInterfaces";

export interface IPasswordInput extends IInputField{
    margin?: 'dense' | 'normal';
}

export const PasswordInput: React.FC<IPasswordInput> = (props) => {
    return (
        <>
            <Field name={props.name}

                   render={({field, form}: FieldProps) => {

                       return props.variant ?
                           (<TextField
                               {...props}
                               value={field.value || ''}
                               onChange={field.onChange}
                               type={'password'}
                               variant={"outlined"}
                               margin={props.margin ? props.margin : 'none'}
                               error={form.touched[field.name] && !!form.errors[field.name]}
                           />)
                           :
                           (<TextField
                               {...props}
                               value={field.value || ''}
                               onChange={field.onChange}
                               type={'password'}
                               variant={"standard"}
                               margin={props.margin ? props.margin : 'none'}
                               error={form.touched[field.name] && !!form.errors[field.name]}
                           />)
                        }
                        }
            />
            <div style={{color: 'red'}}>
                <ErrorMessage
                    name={props.name}
                    component={'div'}
                />
            </div>
        </>
    )
};

