import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { getProductDetailById } from '../../API/productsAPI';
import { addProduct } from '../../redux/cart/cartSlice';
import { isLoggedIn } from '../../redux/user/selectors';
import Modal from '../../components/Modal/Modal';
import firstLetterToUpperCase from '../../helpers/toUpperCase';
import {
  Container,
  Descr,
  Rating,
  Title,
  Cart,
  FlexContainer,
  BackArrow,
  BackLink,
  ImageWrapper,
} from './ProductDetailPage.styled';

export default function ProductDetailPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [modal, setModal] = useState(false);
  const isUserLoggedIn = useSelector(isLoggedIn);
  const { isError } = useQuery(['product', productId], async () => {
    const { data } = await getProductDetailById(productId);
    setProduct(data);
  });
  const backLinkHref = location.state?.from ?? '/';
  const onClickHandler = ({ title, price, id }) => {
    if (!isUserLoggedIn) {
      setModal(true);
    } else {
      dispatch(addProduct({ title, price, id }));
    }
  };

  if (!product) {
    return null;
  }
  const { title, price, description, id, image, rating } = product;

  return (
    <>
      {isError &&
        toast.error('Something went wrong... Please try again in few minutes')}
      <Container>
        <BackLink to={backLinkHref}>
          <BackArrow /> Back
        </BackLink>

        <Title>{title}</Title>
        <FlexContainer>
          <ImageWrapper>
            <img src={image} alt={title}></img>
          </ImageWrapper>
          <div>
            <Descr>{firstLetterToUpperCase(description)}</Descr>

            <Rating>Rating: {rating.rate}</Rating>
            <FlexContainer>
              <Rating>Price: {price}</Rating>
              <Cart onClick={() => onClickHandler({ title, price, id })} />

              {modal && <Modal setIsActive={setModal} />}
            </FlexContainer>
          </div>
        </FlexContainer>
      </Container>
    </>
  );
}
