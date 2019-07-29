import * as React from "react";
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";


interface IProps {

    firsName:string;
    lastName:string;
    email:string;
    password:string

}
// const user = localStorage.getItem('data');
// const userP = JSON.parse(user)
// console.log(userP);
export const List: React.FC<IProps> = (user) => {

    return (
        <ListItem  key={user.firsName}>
            <ListItemText
                primary={user.firsName +" "+user.lastName}
                secondary={user.email}
            />
        </ListItem>
    )
};

