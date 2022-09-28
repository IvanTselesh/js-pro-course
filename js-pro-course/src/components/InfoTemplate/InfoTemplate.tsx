import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../App";

interface IInfoTemplate {
  header: string
  children: string
  textBtn: string
  route: string
  onClick: () => void
};

export const InfoTemplate = (props: IInfoTemplate) => {
  const isDark = useContext(Context);
  return (<div>
      <h2>{props.header}</h2>
      <p>{props.children}</p>
      <NavLink to={props.route}>
        <Button text={props.textBtn} disabled={false} styleBtn="buttonLogin" onClick={props.onClick} />
      </NavLink>
  </div>
  )
}