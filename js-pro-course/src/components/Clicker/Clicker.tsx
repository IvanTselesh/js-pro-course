import React, {useContext, useState} from "react";
import {Button} from "../Button/Button";
import {Context} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {TState} from "../../redux/store";
import {ACTIONS} from "../../redux/constants";
import {decrement, increment} from "../../redux/actions/counter";


export const Clicker = () => {
    const value = useSelector((state: TState) => state.counterReducer.value);
    const dispatch = useDispatch();
    const items = new Array(10).fill(0).map((item, index) => index);

    const handleIncrement = () => {
      dispatch(increment());
    };

    const handleDecrement = () => {
      dispatch(decrement());
    };


    // const reset = () => {
    //     setCount(0)
    // }
    //
    // const disablePlus = () => {
    //     if (count <= 0) {
    //         return (<div>
    //                 {/*<h2>{count}</h2>*/}
    //                 <Button text='+' onClick={onClickPlus} disabled={false} styleBtn="button" />
    //                 <Button text='Reset' onClick={reset} disabled={false} styleBtn="button" />
    //             </div>
    //         );
    //     };
    // };
    //
    // const disableMinus = () => {
    //         return (<div>
    //                 {count >= 10 ? <h1>АСТАНАВИТЕСЬ!</h1> : null}
    //                 {/*<h2>{count}</h2>*/}
    //                 <Button text={'-'} onClick={onClickMinus} disabled={false} styleBtn="button" />
    //                 <Button text='Reset' onClick={reset} disabled={false} styleBtn="button" />
    //             </div>
    //         );
    // };
    //
    // const showClicker = () => {
    //     if (count === 0) {
    //         return disableMinus
    //     }
    //     if(count === 10) {
    //         return disablePlus
    //     } else {
    //         return (<div>
    //                 <Button text='+' onClick={onClickPlus} disabled={false} styleBtn="button" />
    //                 <Button text={'-'} onClick={onClickMinus} disabled={false} styleBtn="button" />
    //                 <Button text='Reset' onClick={reset} disabled={false} styleBtn="button" />
    //             </div>
    //         )
    //     }
    // }

    return <div>
        <h2>{value}</h2>
        {value < 10 ? <Button text='+' onClick={handleIncrement} disabled={false} styleBtn="button"/> : null}
        {value > 0 ? <Button text={'-'} onClick={handleDecrement} disabled={false} styleBtn="button" /> : null}
        <Button text='Reset' onClick={()=>{}} disabled={false} styleBtn="button" />
    </div>
}

// class Clicker1 extends Component<any, { count: number }> {
//     constructor(props: any) {
//         super(props);
//
//         this.state = {
//             count: 0,
//         };
//
//         this.onClickPlus = this.onClickPlus.bind(this);
//     };
//
//     onClickPlus = () => {
//         this.setState({count: this.state.count + 1})
//     };
//
//     render() {
//         return (
//             <div>
//                 <h2>{this.state.count}</h2>
//                 <Button text="+" onClick={()=>{}} disabled={false} type="primary" />
//             </div>
//         )
//     }
// }