import * as React from 'react';
import {Button ,TextField} from "@material-ui/core";
import {Form, Formik} from "formik";


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
            {({values ,handleChange, handleBlur}) => (
                <Form>
                    <div>
                    <TextField
                        style={{ marginTop:30}}
                        name={'firstName'}
                        placeholder={'Firstname'}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </div>
                    <div>
                    <TextField
                        name={'lastName'}
                        placeholder={'Lastname'}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </div>
                    <div>
                    <TextField
                        name={'email'}
                        placeholder={'email'}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </div>
                    <Button
                        style={{ marginTop:30}}
                        type={'submit'}
                        color={'primary'}
                        variant={'outlined'}

                    >submit</Button>
                    <pre>
                        {JSON.stringify(values,null, 2)}
                    </pre>
                </Form>

            )}
        </Formik>
    )
};