import React, {useEffect, useReducer, useRef } from "react";
import {Button} from "../Button/Button";


export const Timer = () => {
  const [state, dispatch] = useReducer(reducer, reducer(false, 0));
  const idRef = useRef<NodeJS.Timeout | number>(0);
  useEffect(() => {
    if (!state.isActive) {
      return;
    }
    idRef.current = setInterval(() => dispatch({type: 'tick'}), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isActive]);

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "start":
        return {...state, isActive: true}
      case "stop":
        return {...state, isActive: false}
      case "reset":
        return {isActive: false, time: 0}
      case "tick":
        return {isActive: true, time: state.time + 1}
      default:
        return {isActive: false, time: 0}
    }
  }

  return (
    <div>
      <div>{state.time}</div>
      <div>
        <Button text="Start" onClick={() => dispatch({ type: 'start' })} disabled={false} type="primary" />
        <Button text="Stop" onClick={() => dispatch({ type: 'stop' })} disabled={false} type="primary" />
        <Button text="Reset" onClick={() => dispatch({ type: 'reset' })} disabled={false} type="primary" />
      </div>
    </div>
  )
}