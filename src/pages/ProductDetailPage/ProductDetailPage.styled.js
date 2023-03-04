import styled from '@emotion/styled';
import { GiShoppingCart } from 'react-icons/gi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  padding: 60px 40px;
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;
export const ImageWrapper = styled.div``;
export const Descr = styled.p`
  width: 900px;
  margin-bottom: 20px;
  padding: 0 40px;
  font-weight: 500;
`;
export const Rating = styled.p`
  padding: 0 40px;
  font-weight: 500;
`;
export const Cart = styled(GiShoppingCart)`
  margin-bottom: 20px;
  margin-right: 40px;
  width: 40px;
  height: 40px;
  :hover {
    color: #9615db;
    cursor: pointer;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BackArrow = styled(HiOutlineArrowNarrowLeft)`
  color: #9615db;
  width: 20px;
  margin-right: 8px;
`;
export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #555759;
  :hover {
    color: #9615db;
  }
`;
