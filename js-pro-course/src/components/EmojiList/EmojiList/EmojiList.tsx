import React from "react";
import {EmojiRow} from "../EmojiRow/EmojiRow";

interface IEmoji {
    title: string
    symbol: string
    keywords: string
}

interface EmojiList {
    emojies: IEmoji[]
}

export const EmojiList = ({emojies}: EmojiList) => {
    return (
        <div>
            <ul>
                {emojies.map((item) => {
                    return <EmojiRow title={item.title} symbol={item.symbol} />
                })}
            </ul>
        </div>
    )
}