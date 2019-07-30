import * as React from "react";
import {ErrorMessage, Field, FieldProps} from "formik";
import {FormControl} from "@material-ui/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import {IInputField} from "./MyForm2/MyFormInterfaces";



interface IValue {
    label:string,
    value:string
}
interface ISelect extends IInputField{
    options:IValue[]
}

export const SelectInput: React.FC<ISelect> = (props) => {

    return (
        <div>
            <Field
                name={props.name}
                render={({field, form}: FieldProps) => {

                    return (
                        <FormControl variant="outlined">
                            <NativeSelect
                                value={field.value ? field.value : ''}
                                onChange={field.onChange}
                                name={props.name}
                                {...field}
                            >
                                <option value="">{`Select ${props.placeholder}`}</option>
                                {props.options.map((m:IValue ,i) => {
                                    return <option key={i} value={m.value}>{m.label}</option>
                                })}
                            </NativeSelect>

                        </FormControl>
                    )

                }}
            />
            <div style={{color: 'red'}}>
                <ErrorMessage
                    name={props.name}
                    component={'div'}
                />
            </div>
        </div>
    )
};

