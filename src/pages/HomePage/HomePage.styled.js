import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
export const Main = styled.main`
  padding: 40px 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Item = styled.li`
  flex-basis: calc((100% - 90px) / 4);
  border: 1px solid #555759;
  border-radius: 4px;
  padding: 30px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ContentWrapper = styled.div``;
export const Image = styled.img`
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
`;
export const ItemName = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 500;
`;
export const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
export const StyledLink = styled(NavLink)`
  color: #2d3032;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  :hover,
  :focus,
  :active {
    color: #9615db;
    text-decoration: underline;
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FilterContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  border-radius: 4px;
  background-color: #d2d3d3;
  margin-bottom: 20px;
  padding: 20px 20px;
`;
export const Label = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const ButtonArrow = styled(BsArrowRightShort)`
  width: 20px;
  height: 20px;
`;
export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: transparent;
  margin: 0 20px;
  border-radius: 4px;
  padding: 6px;
  :hover,
  :focus {
    box-shadow: rgba(85, 87, 89, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(85, 87, 89, 0.35) 0px -2px 6px 0px inset;
  }
`;
