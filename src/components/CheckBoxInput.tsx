import * as React from "react";
import {Field, FieldProps} from "formik";
import {Switch} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {IInputField} from "./MyForm2/MyFormInterfaces";


export interface  ICheckBoxInput extends IInputField{
    checked?: boolean;
}


export const CheckBoxInput: React.FC<ICheckBoxInput> = (props) => {
    return (
        <div>
            <Field
                name={props.name}
                render={({field, form}: FieldProps) => {

                    return (

                        <FormControlLabel
                            {...props}
                            label={props.placeholder}
                            labelPlacement={'start'}
                            control={<Switch
                                {...field}
                                checked={props.checked}
                                onChange={field.onChange}
                                value={props.checked}
                            />
                            }>
                        </FormControlLabel>

                    )
                }}
            />
        </div>
    )
};

