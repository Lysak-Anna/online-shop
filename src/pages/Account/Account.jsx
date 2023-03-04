import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../redux/user/selectors';
import { removeUser } from '../../redux/user/userSlice';
import { clearCart } from '../../redux/cart/cartSlice';
import { LogoutIcon, FlexContainer, LogoutButton } from './Account.styled';
import { Container } from '../LoginPage/LoginPage.styled';

export default function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUserInfo);
  const onClickLogout = () => {
    dispatch(removeUser());
    dispatch(clearCart());
    navigate('/');
  };
  return (
    <Container>
      <FlexContainer>
        <h2>Welcome {user?.email}</h2>
        <LogoutButton type="button" onClick={onClickLogout}>
          Log out
          <LogoutIcon />
        </LogoutButton>
      </FlexContainer>
      <p>
        In your personal account you will receive information about purchases,
        sales...
      </p>
    </Container>
  );
}
