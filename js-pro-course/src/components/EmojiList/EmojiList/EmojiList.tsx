import React, {ChangeEventHandler, useState} from "react";
import {EmojiRow} from "../EmojiRow/EmojiRow";
import {Input} from "../../Input/Input";
import styles from "./style.module.css";

interface IEmoji {
    title: string
    symbol: string
    keywords: string
}

interface EmojiList {
    emojies: IEmoji[]
}

export const EmojiList = ({emojies}: EmojiList) => {
    const [searchText, setSearchText] = useState('');

    const handleOnchange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearchText(event.target.value);
    }

    const filteredEmojies = emojies.filter((item) => {
        if(item.title.toLowerCase().includes(searchText) ||
        item.keywords.toLowerCase().includes(searchText)
        ) {
            return true
        } else {
            return false
        }
    })

    return (
        <div>
            <Input value={searchText} onChange={handleOnchange} />
            <ul className={styles.emojiList}>
                {filteredEmojies.map((item, index) => {
                    return <EmojiRow key={index} title={item.title} symbol={item.symbol} />
                })}
            </ul>
        </div>
    )
}