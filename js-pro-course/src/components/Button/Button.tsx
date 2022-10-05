import React, {ContextType, useContext, useEffect, useState} from "react";
import styles from "./style.module.css";
import {Context} from "../../App";

interface Props {
    text: string
    onClick: () => void
    disabled: boolean
    type?: "light" | "dark"
    styleBtn: "buttonLogin" | "button"
}

export const Button = (props: Props) => {
    const isDark = useContext(Context);
    const [typeColor, setTypeColor] = useState('light');

    useEffect(() => {
        if(typeColor === 'light') {
            setTypeColor('dark')
        }
        if(typeColor === 'dark') {
            setTypeColor('light')
        }
    }, [isDark]);

    const choiceType = (typeColor: string) => {
        if(typeColor === 'dark') {
            return styles.dark
        }
        if(typeColor === 'light') {
            return styles.light
        };
    };

    const formBtn = (styleBtn: "buttonLogin" | "button") => {
        if(styleBtn === 'button') {
            return styles.button
        }
        if(styleBtn === 'buttonLogin') {
            return styles.buttonLogin
        }
    }

    // const changeType = (type: "light" | "dark") => {
    //     if(props.type === 'light') {
    //         return styles.light
    //     }
    //     if(props.type === 'dark') {
    //         return styles.dark
    //     }
    // }
    // console.log(props.type)

    return (
        <button className={`${formBtn(props.styleBtn)} ${choiceType(typeColor)}`} onClick={props.onClick}>{props.text}</button>
    );
};