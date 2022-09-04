import React, {Component, useState} from "react";
import {Button} from "../Button/Button";

export const Clicker = () => {
    const [count, setCount] = useState(0);

    const onClickPlus = () => {
        setCount(count + 1)
    }
    const onClickMinus = () => {
        setCount (count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    const disablePlus = () => {
        if (count <= 0) {
            return (<div>
                    {/*<h2>{count}</h2>*/}
                    <Button text='+' onClick={onClickPlus} disabled={false} type="primary" />
                    <Button text='Reset' onClick={reset} disabled={false} type="primary" />
                </div>
            );
        };
    };

    const disableMinus = () => {
            return (<div>
                    {count >= 10 ? <h1>АСТАНАВИТЕСЬ!</h1> : null}
                    {/*<h2>{count}</h2>*/}
                    <Button text={'-'} onClick={onClickMinus} disabled={false} type="primary" />
                    <Button text='Reset' onClick={reset} disabled={false} type="primary" />
                </div>
            );
    };

    const showClicker = () => {
        if (count === 0) {
            return disableMinus
        }
        if(count === 10) {
            return disablePlus
        } else {
            return (<div>
                    <Button text='+' onClick={onClickPlus} disabled={false} type="primary" />
                    <Button text={'-'} onClick={onClickMinus} disabled={false} type="primary" />
                    <Button text='Reset' onClick={reset} disabled={false} type="primary" />
                </div>
            )
        }
    }

    return <div>
        <h2>{count}</h2>
        {count < 10 ? <Button text='+' onClick={onClickPlus} disabled={false} type="primary"/> : null}
        {count > 0 ? <Button text={'-'} onClick={onClickMinus} disabled={false} type="primary" /> : null}
        <Button text='Reset' onClick={reset} disabled={false} type="primary" />
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