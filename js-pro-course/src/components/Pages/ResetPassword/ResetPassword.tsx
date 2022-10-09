import { ChangeEventHandler, useState } from "react";
import { NotificationManager } from "react-notifications";
import {resetPassword} from "../../../api/posts";
import {Container} from "../../Container/Container";
import {Header} from "../../Header/Header";
import {Title} from "../../Title/Title";
import {Input} from "../../Input/Input";
import {Button} from "../../Button/Button";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const sendEmail = () => {
    resetPassword(email).then((response) => {
      if (response.ok) {
        NotificationManager.info(
          "Message was sent to your email"
        );

        setEmail("");
      }
    });
  };

  return (
    <Container>
      <Header />
      <Title text="Reset password" />
      <Input value={email} onChange={handleEmail} />
      <Button text="Send email" onClick={sendEmail} styleBtn='button' disabled={false} />
    </Container>
  );
};