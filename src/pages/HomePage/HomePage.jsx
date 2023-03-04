import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProducts, getProductsByCategory } from './../../API/productsAPI';
import { getCategoryFromState } from '../../redux/products/selectors';
import {
  Main,
  List,
  Item,
  Image,
  ContentWrapper,
  ItemName,
  ItemPrice,
  StyledLink,
  Flex,
  FilterContainer,
  Label,
  ButtonArrow,
  FilterButton,
} from './HomePage.styled';

export default function HomePage() {
  const location = useLocation();
  const selectedCategory = useSelector(getCategoryFromState);
  const [products, setProducts] = useState([]);
  const getProductsList = async category => {
    if (category === 'all') {
      const { data } = await getProducts();
      setProducts(data);
      return;
    }
    const { data } = await getProductsByCategory(selectedCategory.categories);
    setProducts(data);
  };

  const { isError } = useQuery(
    ['products', selectedCategory.categories],
    async () => {
      await getProductsList(selectedCategory.categories);
    }
  );
  const increasePrice = products => {
    const array = [...products].sort(
      (firstProd, secondProd) => firstProd.price - secondProd.price
    );
    setProducts(array);
  };
  const decreasePrice = products => {
    const array = [...products].sort(
      (firstProd, secondProd) => secondProd.price - firstProd.price
    );
    setProducts(array);
  };
  const increaseRating = products => {
    const array = [...products].sort(
      (firstProd, secondProd) => firstProd.rating.rate - secondProd.rating.rate
    );
    setProducts(array);
  };
  const decreaseRating = products => {
    const array = [...products].sort(
      (firstProd, secondProd) => secondProd.rating.rate - firstProd.rating.rate
    );
    setProducts(array);
  };
  return (
    <Main>
      {isError && toast.error('Something went wrong...')}
      {products && (
        <>
          <FilterContainer>
            <Label>Filters</Label>
            <Flex>
              <Flex>
                <FilterButton onClick={() => increasePrice(products)}>
                  min <ButtonArrow /> max
                </FilterButton>
                <Label>Price</Label>
                <FilterButton onClick={() => decreasePrice(products)}>
                  max <ButtonArrow /> min
                </FilterButton>
              </Flex>
              <Flex>
                <FilterButton onClick={() => increaseRating(products)}>
                  min <ButtonArrow /> max
                </FilterButton>
                <Label>Rating</Label>
                <FilterButton onClick={() => decreaseRating(products)}>
                  max <ButtonArrow /> min
                </FilterButton>
              </Flex>
            </Flex>
          </FilterContainer>
          <List>
            {products?.map(({ id, image, title, price }) => (
              <Item key={id}>
                <Image src={image} alt={title}></Image>
                <ContentWrapper>
                  <ItemName>{title}</ItemName>
                  <Flex>
                    <ItemPrice>{price} USD</ItemPrice>
                    <StyledLink
                      to={`/product/${id}`}
                      state={{ from: location }}
                    >
                      Show more...
                    </StyledLink>
                  </Flex>
                </ContentWrapper>
              </Item>
            ))}
          </List>
        </>
      )}
    </Main>
  );
}
