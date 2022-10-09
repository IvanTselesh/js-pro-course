import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import {confirmPassword} from "../../../api/posts";
import {Container} from "../../Container/Container";
import {Header} from "../../Header/Header";
import {Title} from "../../Title/Title";
import {Input} from "../../Input/Input";
import {Button} from "../../Button/Button";

export const ConfirmPassword = () => {
  const [password, setPassword] = useState("");
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const navigate = useNavigate();

  const handleConfirmPassword = () => {
    if (uid && token && password) {
      confirmPassword(uid, token, password).then((response) => {
        if (response.ok) {
          navigate("/login");
        } else {
          NotificationManager.error("Что-то пошло не так");
        }
      });
    }
  };

  return (
    <Container>
      <Header />
      <Title text="Подтвердите пароль" />
      <Input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        disabled={false}
        styleBtn='button'
        onClick={handleConfirmPassword}
        text={"Confirm Password"}
      />
    </Container>
  );
};