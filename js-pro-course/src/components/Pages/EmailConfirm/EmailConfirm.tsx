import {Header} from "../../Header/Header";
import {NavLink} from "react-router-dom";
import {Button} from "../../Button/Button";
import {InfoTemplate} from "../../InfoTemplate/InfoTemplate";

export const EmailConfirm = () => {
  return (
    <div>
      <Header />
      <InfoTemplate
        header="Success"
        text1="Email confirmed"
        text2="Your registration is now completed"
        textBtn="Login"
        route="/login" />
    </div>
  )
}