import {Header} from "../../Header/Header";
import {NavLink, useNavigate} from "react-router-dom";
import {Button} from "../../Button/Button";
import {InfoTemplate} from "../../InfoTemplate/InfoTemplate";

export const EmailConfirm = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate('/login')
  };
  return (
    <div>
      <Header />
      <InfoTemplate
        header="Success"
        textBtn="Login"
        route="/login"
        onClick={navToLogin}
      >Email confirmed. Your registration is now completed</InfoTemplate>
    </div>
  )
}