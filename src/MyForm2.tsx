import * as React from 'react';
import {Button} from "@material-ui/core";
import {Field, Form, Formik} from "formik";
import {MyCustomField} from "./MyCustomField";


interface IValues {
    firstName: string;
    lastName: string;
    email: string;
}

interface IProps {
    onSubmit: (values: IValues) => void;
}

export const MyForm: React.FC<IProps> = ({onSubmit}) => {
    return (
        <Formik initialValues={{firstName: '', lastName: '', email: ''}}
                onSubmit={(values) => {
                    onSubmit(values)
                }}>

            {() => (
                <Form>
                    <div>
                        <Field
                            name={'firstName'}
                            placeholder={'Firstname'}
                            component={MyCustomField}
                        />
                    </div>
                    <div>
                        <Field
                            name={'lastName'}
                            placeholder={'LastName'}
                            component={MyCustomField}
                        />
                    </div>
                    <div>
                        <Field
                            name={'email'}
                            placeholder={'Email'}
                            component={MyCustomField}
                        />
                    </div>
                    {/*// <div>*/}
                    {/*//     <TextField*/}
                    {/*//         placeholder={"Firstname"}*/}
                    {/*//         name={"firstName"}*/}
                    {/*//         value={values.firstName}*/}
                    {/*//         onChange={handleChange}*/}
                    {/*//         onBlur={handleBlur}*/}
                    {/*//     />*/}
                    {/*// </div>*/}
                    <Button
                        style={{marginTop: 30}}
                        type={'submit'}
                        color={'primary'}
                        variant={'outlined'}

                    >submit</Button>
                    {/*<pre>*/}
                    {/*{JSON.stringify(values, null, 2)}*/}
                    {/*</pre>*/}
                </Form>

            )}
        </Formik>
    )
};