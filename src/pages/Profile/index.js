import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  function handleSubmit(data) {}
  return (
    <Container>
      <Form initialData={profile}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Senha nova" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmacao de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
