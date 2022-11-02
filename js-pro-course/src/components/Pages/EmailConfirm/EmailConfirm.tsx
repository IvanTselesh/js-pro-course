import {Header} from "../../Header/Header";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Button} from "../../Button/Button";
import {InfoTemplate} from "../../InfoTemplate/InfoTemplate";
import {useEffect} from "react";
import {activateUser} from "../../../api/registration";

export const EmailConfirm = () => {
  const navigate = useNavigate();
  const params = useParams()
  const navToLogin = () => {
    navigate('/login')
  };

  useEffect(() => {
    if (params.uid && params.token) {
      activateUser(params.uid, params.token);
    }
  }, []);


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