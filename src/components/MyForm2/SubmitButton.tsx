import * as React from "react";
import {Button} from "@material-ui/core";

export interface ISubmitButton {
    disabled?: boolean;
    color?: 'inherit' | 'primary' | 'secondary' | 'default';

}


const SubmitButton: React.FC<ISubmitButton> = (props) => (

    <>
        <Button type={'submit'} color={props.color ? props.color : 'default'} disabled={!props.disabled}>{props.children}</Button>
    </>
);

export default SubmitButton;