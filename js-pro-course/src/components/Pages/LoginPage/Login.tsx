import {Login} from "../../Login/Login";
import {Header} from "../../Header/Header";
import {Container} from "../../Container/Container";
import {Toggle} from "../../Toggle/Toggle";

export const LoginPage = () => {
  return (
    <Container>
      <Header />
      <Toggle />
      <Login />
    </Container>
  )
}