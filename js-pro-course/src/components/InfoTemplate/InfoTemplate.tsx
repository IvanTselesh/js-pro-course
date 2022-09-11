import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";

interface IInfoTemplate {
  header: string
  text1: string
  text2: string
  textBtn: string
  route: string
};

export const InfoTemplate = (props: IInfoTemplate) => {
  return (<div>
      <h2>{props.header}</h2>
      <p>text1</p>
      <p>text2</p>
      <NavLink to={props.route}>
        <Button text={props.textBtn} disabled={false} type="primary" onClick={() => {}} />
      </NavLink>
  </div>
  )
}