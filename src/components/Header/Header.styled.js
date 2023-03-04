import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { BiUser } from 'react-icons/bi';

export const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  padding: 10px 40px;
  background-color: #2d3032;
  justify-content: space-between;
`;
export const CartIcon = styled(GiShoppingCart)`
  width: 50px;
  height: 50px;
  color: #d2d3d3;
  margin-left: 30px;
`;
export const User = styled(BiUser)`
  width: 50px;
  height: 50px;
  color: #d2d3d3;
  margin-left: 30px;
`;
export const LinkContainer = styled.div`
  display: flex;
  padding: 16px 0;
`;
export const CategoriesList = styled.select`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #d2d3d3;
  margin-top: 10px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const Links = styled(NavLink)`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: #d2d3d3;
  margin: auto 0;
  text-decoration: none;
  &.active,
  :hover,
  :focus {
    color: #9615db;
  }
`;
export const Label = styled.label`
  display: block;
  margin: auto 0;
  font-size: 20px;
  font-weight: 500;
  color: #d2d3d3;
`;
export const RelativeCont = styled.div`
  position: relative;
`;
export const CartCount = styled.span`
  position: absolute;
  right: 4px;
  top: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9615db;
  color: #d2d3d3;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 500;
`;
