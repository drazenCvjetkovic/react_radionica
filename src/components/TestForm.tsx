import * as React from "react";
import {FormEvent, useState} from "react";
import * as Yup from "yup";

interface ITestForm {
    render:(form:any, updateField:any)=>void
    onSubmit:any
    children:any
}

const TestForm = ({render, onSubmit}:ITestForm) => {

    interface Itouched {
        [s:string]:boolean
    }

    const touched:Itouched = {
        firstname: false,
        lastname: false
    }

    const [form, setValues] = useState({
        values: {
            firstname: '',
            lastname: ''
        },
        errors: {
            firstname: false,
            lastname: false
        },
        touched: touched
    });




    const updateField = (e: React.ChangeEvent<HTMLInputElement>) => updateField2(e.target.name, e.target.value)

    const updateField2 = (name:string, value:any, returnOnSuccess?:boolean) => {

        return new Promise((resolve, reject) => {

            const validationErrors: any = {};

            let touched:Itouched = returnOnSuccess ? form.touched : {
                ...form.touched,
                [name]: true
            }


            if(returnOnSuccess){

                for (let key in touched) {
                    touched[key] = true
                }
            }

            const values = returnOnSuccess ? form.values : {
                ...form.values,
                [name]: value
            };


            validationSchema.validate(values, {abortEarly: false}).catch(function (err) {

                err.inner.map((item: any) => {
                    return validationErrors[item.path] = item.message
                });

                reject()

            }).finally(() => {

                console.log("FINALLY")
                console.log("returnOnSuccess", returnOnSuccess)
                console.log("errors", validationErrors=={})
                console.log("errors", validationErrors)
                console.log("values", values)
                console.log("touched", touched)

                if(returnOnSuccess && isEmpty(validationErrors)){
                    console.log(">>>>resolve")
                    return resolve(values)
                }

                console.log("2")
                setValues({
                    values: values,
                    errors: validationErrors,
                    touched: touched
                });
            });
        });
    };

    console.log(form)

    const printValues = (e: FormEvent) => {
        e.preventDefault();

        updateField2("", "", true)
            .then((values)=> {
                console.log("succes submit", values);
                onSubmit(values)
            })
            .catch(()=>{
                console.log("error try again")
            })
    };


    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('Firstname is required'),
        lastname: Yup.string().required('Lastname is required')
    });

    function isEmpty(obj:{}) {
        return (Object.keys(obj).length === 0)
    }


    // return (<form action={"post"} onSubmit={printValues}>
    //
    //
    //     <input type={"text"} name={"firstname"} value={form.values.firstname} onChange={updateField}/>
    //     {form.errors.firstname && form.touched.firstname ? <span style={{color: "red"}}>{form.errors.firstname}</span> : ''}
    //
    //     <input type={"text"} name={"lastname"} value={form.values.lastname} onChange={updateField}/>
    //     {form.errors.lastname && form.touched.lastname ? <span style={{color: "red"}}>{form.errors.lastname}</span> : ''}
    //
    //
    //     <button type={"submit"}>Submit</button>
    //
    //
    // </form>)

    return <>{render(form, updateField)}</>

};



// const Fform = () => {
//     return (<form action={"post"} onSubmit={printValues}>
//
//
//         <input type={"text"} name={"firstname"} value={form.values.firstname} onChange={updateField}/>
//         {form.errors.firstname && form.touched.firstname ? <span style={{color: "red"}}>{form.errors.firstname}</span> : ''}
//
//         <input type={"text"} name={"lastname"} value={form.values.lastname} onChange={updateField}/>
//         {form.errors.lastname && form.touched.lastname ? <span style={{color: "red"}}>{form.errors.lastname}</span> : ''}
//
//
//         <button type={"submit"}>Submit</button>
//
//
//     </form>)
// }


export default TestForm;