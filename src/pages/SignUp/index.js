import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome e obrigatorio'),
    email: Yup.string()
      .email('Insira um email valido')
      .required('Email obrigatorio'),
    password: Yup.string()
      .min(6, 'Min. 6 caracteres')
      .required('Senha obrigatoria'),
  });

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
