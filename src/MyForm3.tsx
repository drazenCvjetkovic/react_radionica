import * as React from 'react';
import {ErrorMessage, Field, FieldProps, Form, Formik, FormikActions, FormikProps} from 'formik';
import * as Yup from 'yup';
import {Button, Card, createStyles, makeStyles, TextField} from "@material-ui/core";

interface IForm {
    email: string;
    pasword: string;

}

interface ICustomFields extends FieldProps {
    placeholder: string;
}

const initialValues: IForm = {
    email: '',
    pasword: ''
};

const getStyles = makeStyles(() =>
    createStyles({
        inputField: {
            marginTop: 30,
        },
        button: {
            marginTop: 20
        }
    })
);

// const renderForm = (bag: FormikProps<IForm>) => {
const renderForm: React.FC<FormikProps<IForm>> = (props) => {
    //const classes = getStyles();


    return (

        <Card>
            <Form>
                <div>
                    <Field
                        type={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        component={MyCustomField}
                    />
                    <ErrorMessage
                        name={"email"}
                        component={"div"}
                    />
                    {/*div as a parent component*/}
                </div>

                <div>
                    <Field type={"password"}
                           name={"password"}
                           placeholder={"Password"}
                           component={MyCustomField}
                    />
                    <ErrorMessage
                        name={"password"}
                        component={"div"}
                    />
                </div>

                <Button variant={"outlined"}
                        color={"primary"}
                    // className={classes.button}
                        onClick={props.submitForm}
                >
                    Submit</Button>
            </Form>
        </Card>
    )
};

const MyCustomField: React.FC<ICustomFields> = ({placeholder, field}) => {
    const classes = getStyles();

    return (
        <TextField
            className={classes.inputField}
            variant={"outlined"}
            placeholder={placeholder}
            {...field} ///primam sve od komponente Field
        />
    );
};

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required')
});

const handleSubbmit = (values: IForm, actions: FormikActions<IForm>) => {

    console.log("Values:", values);
    actions.resetForm();
    actions.setSubmitting(false)
};


class MyForm3 extends React.Component {

    render() {
        return (
            <section style={{textAlign: "center"}}>
                <h2>Input your data</h2>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubbmit}
                    validationSchema={validationSchema}
                    render={(bag: FormikProps<IForm>) => renderForm(bag)}
                />
            </section>

        )
    }
}

export default MyForm3;