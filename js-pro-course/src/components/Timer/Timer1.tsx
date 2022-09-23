import React, {useEffect, useRef, useState} from "react";
import {Button} from "../Button/Button";

let timer: NodeJS.Timer | null = null;

export const Timer1 = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timer | null>(null);


  const onClickStart = () => {
    if(!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((state) => state + 1)
      }, 1000)
    };
  };

  const onClickStop = () => {
    if(timerRef.current) {
      clearInterval(timerRef.current)
    };
    timerRef.current = null;
  };

  const onClickReset = () => {
    if(timerRef.current) {
      clearInterval(timerRef.current)
    };
    timerRef.current = null;
    setCount(0)
  };

  return (
    <div>
      <h3>{count}</h3>
      <Button onClick={onClickStart} text="Start" disabled={false} styleBtn="button" />
      <Button onClick={onClickStop} text="Stop" disabled={false} styleBtn="button" />
      <Button onClick={onClickReset} text="Reset" disabled={false} styleBtn="button" />
    </div>
  )
};