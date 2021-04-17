import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password }));
  };
  return (
    <Container>
      <h1 className="text-2xl text-center">Login</h1>

      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <input
          className="m-5 shadow-md p-3 text-xl rounded-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu email"
        />
        <input
          className="m-5 shadow-md p-3 text-xl rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Seu senha"
        />

        <button className="w-96 flex justify-center ml-5" type="submit">
          Acessar
        </button>
      </form>
    </Container>
  );
}
