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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nombre completo" />
        <Input type="email" placeholder="Correo electrónico" />
        <Input type="password" placeholder="Contraseña " />
        <Input type="password" placeholder="Confirma la contraseña" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Registrarte</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
      ¿Ya tienes una cuenta? 
        <BoldLink href="#" onClick={switchToSignin}>
        Ingresar
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}