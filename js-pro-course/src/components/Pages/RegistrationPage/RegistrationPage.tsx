import {Container} from "../../Container/Container";
import {Registration} from "../../Registration/Registration";
import {Toggle} from "../../Toggle/Toggle";
import {Header} from "../../Header/Header";

export const RegistrationPage = () => {
  return (
    <Container>
      <Header />
      <Toggle />
      <Registration />
    </Container>
  )
}