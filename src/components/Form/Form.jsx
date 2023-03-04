import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../base/base';
import { setUser } from '../../redux/user/userSlice';
import {
  FormContainer,
  Input,
  FormButton,
  Line,
  GoogleButton,
  GoogleIcon,
} from './Form.styled';

export default function Form({ title, handleClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) =>
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      )
      .catch(error =>
        toast.error('Something went wrong... Please, try to sign in with email')
      );
  };

  return (
    <>
      <FormContainer>
        <label>
          <Input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="Email"
          ></Input>
        </label>
        <label>
          <Input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
          ></Input>
        </label>
        <FormButton
          type="button"
          onClick={() => handleClick(email, password, setEmail, setPassword)}
        >
          {title}
        </FormButton>
        <Line>or</Line>
        <GoogleButton type="button" onClick={() => signInWithGoogle()}>
          <GoogleIcon /> Continue with Google
        </GoogleButton>
      </FormContainer>
    </>
  );
}
