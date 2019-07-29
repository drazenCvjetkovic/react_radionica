import * as React from "react";
import {MyForm} from '../components/MyForm/MyForm';
import '../style/Form.css';
// import {MyInput} from "../components/MyForm/MyInput";


export default class ParentFormComponent extends React.Component<{}> {


    render() {
        return (
            <div className={'parent_div'}>
                {/*{console.log(this.props)}*/}
                {/*Prvi način*/}

                {/*<MyForm*/}
                    {/*onSubmit={(values) => {*/}
                        {/*console.log("submitted:", values);*/}
                    {/*}}*/}
                {/*>*/}
                    {/*<MyInput name={"firstname"} type={"text"} placeholder={'First name'}/>*/}
                {/*</MyForm>*/}

                {/*Drugi način*/}

                <MyForm
                    onSubmit={(values) => {
                        console.log("submitted:", values);
                    }}
                />
            </div>
        );
    }
}