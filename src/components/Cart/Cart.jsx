import { useDispatch, useSelector } from 'react-redux';
import { getProductFromState } from './../../redux/cart/selectors';
import {
  decreaseCount,
  deleteProduct,
  increaseCount,
} from '../../redux/cart/cartSlice';
import { Container } from '../../pages/ProductDetailPage/ProductDetailPage.styled';
import {
  CartContainer,
  MinusIcon,
  PlusIcon,
  Wrapper,
  DeleteIcon,
  Button,
  Th,
  Td,
} from './Cart.styled';
export default function Cart() {
  const products = useSelector(getProductFromState);
  const dispatch = useDispatch();
  const onDeleteProduct = id => {
    dispatch(deleteProduct(id));
  };
  const increase = id => {
    dispatch(increaseCount(id));
  };
  const decrease = id => {
    dispatch(decreaseCount(id));
  };
  return (
    <Container>
      <CartContainer>
        {products.cart.length > 0 ? (
          <table>
            <thead>
              <tr>
                <Th>Product name</Th>
                <Th>Price</Th>
                <Th>Count</Th>
                <Th>Sum</Th>
              </tr>
            </thead>
            <tbody>
              {products.cart.map(({ id, title, price, count }) => {
                return (
                  <tr key={id}>
                    <Td>{title}</Td>
                    <Td>{price}</Td>
                    <Td>
                      {
                        <Wrapper>
                          <Button
                            type="button"
                            disabled={count === 0}
                            onClick={() => decrease(id)}
                          >
                            <MinusIcon />
                          </Button>
                          <p>{count}</p>
                          <Button
                            type="button"
                            onClick={() => increase(id)}
                            disabled={count > 8}
                          >
                            <PlusIcon />
                          </Button>
                        </Wrapper>
                      }
                    </Td>
                    <Td>{price * count}</Td>
                    <Td>
                      {<DeleteIcon onClick={() => onDeleteProduct(id)} />}
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>Add products to cart</p>
        )}
      </CartContainer>
    </Container>
  );
}
