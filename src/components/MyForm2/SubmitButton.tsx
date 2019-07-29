import * as React from "react";
import {Button} from "@material-ui/core";

const SubmitButton: React.FC = ({children}) => (

    <>
        {children}

        <Button type={'submit'}>{children}</Button>
    </>
);

export default SubmitButton;