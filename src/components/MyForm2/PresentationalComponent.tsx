import * as React from "react";
//import TestForm from "../TestForm";
import {TextInput} from "../TextInput";
import {EmailInput} from "../EmailInput";
import {PasswordInput} from "../PasswordInput";
import {CheckBoxInput} from "../CheckBoxInput";
import {SelectInput} from "../SelectInput";
import SubmitButton from "./SubmitButton";
import * as Yup from "yup";
import {Form, Formik} from "formik";


export default class PresentationalComponent extends React.Component<{}> {

    initialValues = {
        firstName: 'aaa',
        lastName: '',
        email: '',
        iagree:false
    };

    render() {
        return (
            <div>
                <Formik
                    onSubmit={
                        (values) => {
                            console.log('submitting', values)
                        }
                    }
                    initialValues={this.initialValues}
                    validationSchema={
                        Yup.object().shape({
                            firstName: Yup.string().required('Firstname is required'),
                            lastName: Yup.string().required('Lastname is required'),
                            email: Yup.string().email('Enter valid email').required('Email is required')

                        })
                    }
                >
                    {({values}) => (
                        <Form>
                            <div>
                                <TextInput
                                    name={"firstName"}
                                    placeholder={"Firstname"}
                                    variant={"outlined"}
                                />
                            </div>

                            <TextInput name={"lastName"} placeholder={"Lastname"} />

                            <EmailInput name={"email"} placeholder={"Email"}/>
                            <PasswordInput name={"password"} placeholder={"Password"}/>
                            <CheckBoxInput name={"iagree"} placeholder={"I Agree"} value={"1"}/>
                            <SelectInput name={"gender"} placeholder={"Gender"} options={[
                                {
                                    value: 'male', label: 'Male'
                                },
                                {
                                    value: 'female', label: 'Female'
                                }
                            ]}
                            />

                            <SubmitButton disabled={values.iagree}>Submit</SubmitButton>

                        </Form>
                    )}
                </Formik>

                {/*<form action={"post"} onSubmit={printValues}>*/}


                {/*<input type={"text"} name={"firstname"} value={form.values.firstname} onChange={updateField}/>*/}
                {/*{form.errors.firstname && form.touched.firstname ? <span style={{color: "red"}}>{form.errors.firstname}</span> : ''}*/}

                {/*<input type={"text"} name={"lastname"} value={form.values.lastname} onChange={updateField}/>*/}
                {/*{form.errors.lastname && form.touched.lastname ? <span style={{color: "red"}}>{form.errors.lastname}</span> : ''}*/}


                {/*<button type={"submit"}>Submit</button>*/}

                {/*{"aaa"}*/}

                {/*</form>*/}


                {/*<TestForm*/}

                {/*onSubmit={this.submit}*/}
                {/*render={*/}
                {/*({form, updateField}) => (*/}
                {/*<>*/}

                {/*<form action={"post"} >*/}


                {/*<input type={"text"} name={"firstname"} value={form.values.firstname}*/}
                {/*onChange={updateField}/>*/}
                {/*{form.errors.firstname && form.touched.firstname ?*/}
                {/*<span style={{color: "red"}}>{form.errors.firstname}</span> : ''}*/}

                {/*<input type={"text"} name={"lastname"} value={form.values.lastname}*/}
                {/*onChange={updateField}/>*/}
                {/*{form.errors.lastname && form.touched.lastname ?*/}
                {/*<span style={{color: "red"}}>{form.errors.lastname}</span> : ''}*/}


                {/*<button type={"submit"}>Submit</button>*/}


                {/*</form>*/}
                {/*</>*/}
                {/*)}>*/}

                {/*</TestForm>*/}
            </div>
        );
    }
}
