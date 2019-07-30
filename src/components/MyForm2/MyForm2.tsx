import * as React from 'react';
import {Form, Formik} from "formik";

// formikexport interface IValues {
//     firstName: string;
// }

export interface IInputField {
    name: string;
    value?: string;
    placeholder?: string;
    label?: string;
    checked?: boolean;
    options?: Array<object>;
}


export interface IProps {
    onSubmit: (values: any) => void;
    initialValues:any
    children: any;
    validationSchema?: any;
}

// const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required(' is required'),
// });

export const MyForm2: React.FC<IProps> = ({onSubmit, initialValues, children, validationSchema}) => {

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    onSubmit(values)
                }}
            >

                {() => (

                    <Form>

                        {children}

                    </Form>
                )}
            </Formik>
        </>
    )

};
