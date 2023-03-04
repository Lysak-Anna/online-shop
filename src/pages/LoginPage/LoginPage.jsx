import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Form from '../../components/Form/Form';
import { setUser } from '../../redux/user/userSlice';
import { Container, Title, StyledLink } from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const handleLogin = (email, password, setEmail, setPassword) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      )
      .catch(error => {
        toast.error('Wrong email or password');
      })
      .finally(() => {
        setEmail('');
        setPassword('');
      });
  };

  return (
    <Container>
      <Title>Sign in</Title>
      <Form title="Sign in" handleClick={handleLogin} />
      <p>
        Don't have an account?
        <StyledLink to="/register">Create account</StyledLink>
      </p>
    </Container>
  );
}
