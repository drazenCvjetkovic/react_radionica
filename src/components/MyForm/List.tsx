import * as React from "react";
// import {ListItem} from "@material-ui/core";
// import ListItemText from "@material-ui/core/ListItemText";


interface IProps {

    firsName:string;
    lastName:string;
    email:string;
    password:string

}


let dataFromStorageParse = localStorage.getItem('values');
//dataFromStorageParse = JSON.parse(dataFromStorageParse);
console.log(dataFromStorageParse);

export const List: React.FC<IProps> = () => {

    return (
        <p>j</p>
    )
};

{/*<ListItem  key={userP.firsName}>*/}
{/*<ListItemText*/}
{/*primary={userP.firsName +" "+user.lastName}*/}
{/*secondary={user.email}*/}
{/*/>*/}
{/*</ListItem>*/}