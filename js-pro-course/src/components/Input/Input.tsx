import React, {ChangeEventHandler, useContext, useEffect, useState} from "react";
import styles from "./style.module.css";
import {Context} from "../../App";

interface Input {
    placeholder?: string
    refObj?: any
    id?: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    error?: string
    onBlur?: () => void
    onFocus?: () => void
    type?: string
}

export const Input = (props: Input) => {
    return (
        <div>
            <input
              className={styles.input}
              ref={props.refObj}
              value={props.value}
              placeholder={props.placeholder}
              onChange={props.onChange}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              type={props.type}
            ></input>
            <p className={styles.error}>{props.error}</p>
        </div>
    );
};