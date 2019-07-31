import * as React from 'react';
import {Button, Card, createStyles, makeStyles,} from "@material-ui/core";
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import '../../style/Form.css';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {MyCustomField} from "./MyCustomField";

interface IValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: string;
    multiline: string;
    checkbox: boolean;

}

interface IProps {
    onSubmit: (values: IValues) => void;
}


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be of minimum 6 characters length'),
    multiline: Yup.string().max(100, 'Max 100 characters')


});

const getStyles = makeStyles(() =>
    createStyles({
        inputField: {
            marginTop: 30,
            width: "-webkit-fill-available",
            marginLeft: 20,
            marginRight: 20

        },
        button: {
            marginTop: 20,
            marginBottom: 30,
            backgroundColor: "red",
            color: "white"
        },
        card: {
            alignItems: "center",
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto"
        },
        selectWrapper: {
            minWidth: 120,
        },
        error: {
            color: "red"
        }
    })
);


export const MyForm: React.FC<IProps> = ({onSubmit }) => {//uz on submit dobiti koja polja želimo napraviti
    const classes = getStyles();

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            multiline: '',
            checkbox: false
        }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    onSubmit(values)
                }}>


            {(props) => (

                <div className={classes.card}>
                    <Card className={classes.card}>
                        <Form>

                                <Field
                                    name={'firstName'}
                                    placeholder={'Firstname'}
                                    type={"text"}
                                    component={MyCustomField}
                                />
                                <div className={classes.error}>
                                    <ErrorMessage
                                        name={"firstName"}
                                    />
                                </div>

                                <Field
                                    name={'lastName'}
                                    placeholder={'LastName'}
                                    type={"text"}
                                    component={MyCustomField}
                                />
                                <ErrorMessage
                                    name={"lastName"}
                                    component={"div"}
                                    className={classes.error}
                                />

                                <Field
                                    name={'email'}
                                    placeholder={'Email'}
                                    type={'email'}
                                    component={MyCustomField}
                                />
                                <ErrorMessage
                                    name={"email"}
                                    component={"div"}
                                    className={classes.error}
                                />

                                <Field
                                    name={'password'}
                                    placeholder={'Password'}
                                    type={'password'}
                                    component={MyCustomField}
                                />
                                <ErrorMessage
                                    name={"password"}
                                    component={"div"}
                                    className={classes.error}
                                />

                            <Field
                                type={'select'}
                                name='gender'
                                options={[
                                    {value: ''},
                                    {value: 'Male', label: 'Male'},
                                    {value: 'Female', label: 'Female'},
                                ]}
                                component={MyCustomField}
                            />
                            <div>
                                <Field
                                    name={'multiline'}
                                    placeholder={'About'}
                                    type={'multiline'}
                                    component={MyCustomField}
                                />
                                <ErrorMessage
                                    name={"multiline"}
                                    component={"div"}
                                    className={classes.error}
                                />
                            </div>
                            <div>
                                <FormControlLabel
                                    label={"I Agree to the terms"}
                                    labelPlacement={"start"}
                                    control={<Field
                                        name={'checkbox'}
                                        type={'checkbox'}
                                        checked={props.values.checkbox}
                                        component={MyCustomField}
                                    />}
                                >
                                </FormControlLabel>
                            </div>
                            <Button
                                type={'submit'}
                                variant={'outlined'}
                                className={classes.button}
                                disabled={!props.values.checkbox || props.isSubmitting}
                            >submit</Button>
                        </Form>
                    </Card>

                </div>
            )}
        </Formik>

    )
};