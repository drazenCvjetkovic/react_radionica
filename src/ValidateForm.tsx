import * as React from "react";

import { Formik, Field, FormikErrors,Form } from "formik";
import {MyCustomField} from "./Formik/MyCustomField";

interface FormValues {
    firstName: string;
    pet: string;
}

const initialValues: FormValues = {
    firstName: "",
    pet: "",
};

const ValidateForm: React.FC = () => (
    <>
        <h1>Working with Formik</h1>
        <Formik initialValues={initialValues}

                onSubmit={(values: FormValues) => console.log(values)}

                validate={(values: FormValues) => {

                    const errors: FormikErrors<FormValues> = {};

                    if (!values.firstName) {

                        errors.firstName = "First Name Required";
                        console.log(errors.firstName)

                    }
                    return errors
                }}
                render={({ handleSubmit }) => (

                    <Form>
                        <label htmlFor="firstName">

                            <div>First Name</div>
                            <Field type="text" name="firstName" component={MyCustomField}
                            />
                        </label>
                        <label htmlFor="pet">
                            <div>Gender</div>
                            <Field name="pet" type={'select'} component={MyCustomField}>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Other">Other</option>
                            </Field>
                        </label>
                        <button type="submit">Submit</button>
                    </Form>
                )}>
        </Formik>
    </>
);

export default ValidateForm;