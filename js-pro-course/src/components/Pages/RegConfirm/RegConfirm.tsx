import {Container} from "../../Container/Container";
import {InfoTemplate} from "../../InfoTemplate/InfoTemplate";

export const RegConfirm = () => {
  return (
    <Container>
      <InfoTemplate
        header="Registration Confirmation"
        text1="Please activate your account with the activation link in the email test@gmail.com"
        text2="Please check your email"
        textBtn="Home"
        route="/"
      />
    </Container>
  )
}