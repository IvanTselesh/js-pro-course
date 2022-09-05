import React from "react";
import styles from "./style.module.css";

interface IEmojiRow {
    title: string
    symbol: string
}

export const EmojiRow = ({symbol, title}: IEmojiRow) => {
    return (
        <li className={styles.emojiListItem}>
            {symbol} {title}
        </li>
    );
};