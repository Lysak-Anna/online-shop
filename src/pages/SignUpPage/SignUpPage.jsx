import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Form from '../../components/Form/Form';
import { setUser } from '../../redux/user/userSlice';
import { Container, Title, StyledLink } from '../LoginPage/LoginPage.styled';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const handleSignUp = (email, password, setEmail, setPassword) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        toast.error('Invalid email or password');
      })
      .finally(() => {
        setEmail('');
        setPassword('');
      });
  };
  return (
    <Container>
      <Title>Sign up</Title>
      <Form title="Sign up" handleClick={handleSignUp} />
      <p>
        Already have an account?
        <StyledLink to="/login">Sign in</StyledLink>
      </p>
    </Container>
  );
}
