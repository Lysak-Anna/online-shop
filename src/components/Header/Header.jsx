import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../redux/products/productsCategoriesSlice';
import { getProductFromState } from './../../redux/cart/selectors';
import { isLoggedIn } from './../../redux/user/selectors';
import {
  HeaderContainer,
  CartIcon,
  User,
  LinkContainer,
  CategoriesList,
  Links,
  Label,
  CartCount,
  RelativeCont,
} from './Header.styled';

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector(getProductFromState);
  const isUserLoggedIn = useSelector(isLoggedIn);
  const onChangeHandler = event => {
    dispatch(changeCategory(event.target.value));
  };

  return (
    <>
      <HeaderContainer>
        <Label>
          Categories:
          <CategoriesList onChange={onChangeHandler}>
            <option value="all">all categories</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </CategoriesList>
        </Label>
        <Links to={'/'}>Home</Links>
        {!isUserLoggedIn && (
          <>
            <Links to={'/register'}>Sign Up</Links>
            <Links to={'/login'}>Sign In</Links>
          </>
        )}

        <LinkContainer>
          {isUserLoggedIn && (
            <Link to="/account">
              <User />
            </Link>
          )}

          <Link to="/cart">
            <RelativeCont>
              <CartIcon />
              <CartCount>{cart.cart.length}</CartCount>
            </RelativeCont>
          </Link>
        </LinkContainer>
      </HeaderContainer>
    </>
  );
}
