import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { Marginer } from "../Marginer";
import { AccountContext } from "./AccountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">¿Olvidaste tu contraseña?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Ingresar</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
      ¿No tienes una cuenta? {" "}
        <BoldLink href="#" onClick={switchToSignup}>
        Regístrate
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}