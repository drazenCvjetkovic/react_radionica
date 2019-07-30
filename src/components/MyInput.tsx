import * as React from "react";
import {ErrorMessage, Field} from "formik";
import {MyCustomField} from "../Formik/MyCustomField";

interface IMyInput {
    name: string;
    type: string;
    placeholder?: string;
    value?:string;
    label?:string;
    checked?:boolean;
}

export const MyInput: React.FC<IMyInput>  = (props) => {
    return (
        <>
            <Field
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
                label={props.label}
                checked={props.checked}
                component={MyCustomField}
                {...props}
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

