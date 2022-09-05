import React from "react";

interface IEmojiRow {
    title: string
    symbol: string
}

export const EmojiRow = (props: IEmojiRow) => {
    return (
        <li>
            {props.symbol} {props.title}
        </li>
    );
};