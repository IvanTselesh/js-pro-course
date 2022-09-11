import React, {ChangeEventHandler, useCallback, useEffect, useMemo, useState} from "react";
import styles from "./style.module.css";
import {Input} from "../Input/Input";


export const Converter = () => {
  const [valueBYN, setValueBYN] = useState('');
  const [valueUSD, setValueUSD] = useState('');
  const [currencyRate, setCurrencyRate] =useState(0);

  useEffect(() => {
    const promise = fetch("https://www.nbrb.by/api/exrates/rates/431");

    promise.then((response) => {
      return response.json();
    })
      .then((value) => {
        setCurrencyRate(value.Cur_OfficialRate);
      })
  }, []);

  useEffect(() => {
    const num = +valueBYN;
    if(isNaN(num) && currencyRate !== 0) {
      setValueUSD(String((num / currencyRate).toFixed(2)));
    }
  }, [valueBYN]);
  useEffect(() => {
    const num = +valueUSD;
    if(isNaN(num) && currencyRate !== 0) {
      setValueBYN(String((num * currencyRate).toFixed(2)));
    }
  }, [valueUSD]);

  const eventHandlerUSD: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value);

    if (!isNaN(num)) {
      setValueUSD(event.target.value);
    };
  };
  const eventHandlerBYN: ChangeEventHandler<HTMLInputElement> = (event) => {
    const num = Number(event.target.value);

    if (!isNaN(num)) {
      setValueBYN(event.target.value);
    };
  };


  return (
    <div className={styles.converterWrap}>
      <h2>Live Currency Converter</h2>
      <div className={styles.converterWrapContent}>
        <label htmlFor="usd" className={styles.converterWrapContentTitle}>Enter amount, USD</label>
        <Input id="usd" value={valueUSD} onChange={eventHandlerUSD} />
      </div>
      <div className={styles.converterWrapContent}>
        <label htmlFor="byn" className={styles.converterWrapContentTitle}>Enter amount, BYN</label>
        <Input id="byn" value={valueBYN} onChange={eventHandlerBYN} />
      </div>
    </div>
  )
};