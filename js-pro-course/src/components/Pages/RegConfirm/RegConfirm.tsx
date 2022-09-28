import {Container} from "../../Container/Container";
import {InfoTemplate} from "../../InfoTemplate/InfoTemplate";
import {useNavigate} from "react-router-dom";

export const RegConfirm = () => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/")
  };

  //на страницу назад
  const goBack = () => {
    navigate(-1)
  };

  return (
    <Container>
      <InfoTemplate
        header="Registration Confirmation"
        textBtn="Home"
        route="/"
        onClick={navToHome}
      >Please activate your account with the activation link in the email test@gmail.com. Please check your email</InfoTemplate>
    </Container>
  )
}