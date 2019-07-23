import * as React from "react";

interface IParentFormComponentProps {
    prop: any;
}

export default class ParentFormComponent extends React.Component<IParentFormComponentProps> {
    render() {
        return <div>
            ParentFormComponent works!
        </div>
    }
}