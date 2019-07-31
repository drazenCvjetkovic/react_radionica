import * as React from "react";
import {MyForm} from './MyForm';
import '../../style/Form.css';
import {RouteComponentProps} from "react-router";


export default class ParentFormComponent extends React.Component<RouteComponentProps> {


    render() {
        return (
            <div className={'parent_div'}>
                <MyForm
                    onSubmit={(values) => {
                        console.log("submitted:", values);

                        // try {

                        //     let dataFromStorage = localStorage.getItem('values') ? localStorage.getItem('values') : null;
                        //
                        //     if (dataFromStorage !== null) {
                        //
                        //         let dataFromStorageParse = JSON.parse(dataFromStorage) ? JSON.parse(dataFromStorage) : {};
                        //
                        //        // console.log("dataFromStore" ,dataFromStorageParse,"values",values);
                        //
                        //         let data = {...dataFromStorageParse, values};
                        //
                        //        // console.log("All", data);
                        //
                        //         localStorage.setItem('values', JSON.stringify(data))
                        //
                        //     } else {
                        //         localStorage.setItem('values', JSON.stringify(values))
                        //     }
                        //
                        //
                        // } catch (e) {
                        //     console.log(e)
                        // }

                        // let dataFromStorageParse = localStorage.getItem('values') || "";
                        // dataFromStorageParse = JSON.parse(dataFromStorageParse);
                        // console.log("DataFromStore",dataFromStorageParse);
                        //
                        //
                        // let allValues = [dataFromStorageParse ,values]
                        // localStorage.setItem('values', JSON.stringify(allValues))

                        // this.props.history.push('/list' )
                    }}
                />
            </div>
        );
    }
}