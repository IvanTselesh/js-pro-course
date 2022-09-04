import React from "react";
import {Button} from "../../Button/Button";

interface IItem {
    text: string
    onClickRemove: () => void
}

export const Item = (props: IItem) => {
    return (
        <div>
            <p>{props.text}</p>
            <Button text="Remove" onClick={props.onClickRemove} disabled={false} type="primary" />
        </div>
    )
}