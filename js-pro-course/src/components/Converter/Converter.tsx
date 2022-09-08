import React, {ChangeEventHandler, useCallback, useEffect, useMemo, useState} from "react";
import styles from "./style.module.css";
import {Input} from "../Input/Input";

export const Converter = () => {
  const [valueBYN, setValueBYN] = useState('');
  const [valueUSD, setValueUSD] = useState('');

  const eventHandlerUSD: ChangeEventHandler<HTMLInputElement> = (event) => {
      setValueUSD(valueUSD)
  }

  return (
    <div className={styles.converterWrap}>
      <h2>Live Currency Converter</h2>
      <div className={styles.converterWrapContent}>
        <label htmlFor="usd" className={styles.converterWrapContentTitle}>Enter amount, USD</label>
        <Input id="usd" value={valueUSD} onChange={eventHandlerUSD} />
      </div>
      <div className={styles.converterWrapContent}>
        <label htmlFor="byn" className={styles.converterWrapContentTitle}>Enter amount, BYN</label>
        <Input id="byn" value={valueBYN} onChange={()=>{}} />
      </div>
    </div>
  )
};