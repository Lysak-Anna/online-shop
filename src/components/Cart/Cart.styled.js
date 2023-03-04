import styled from '@emotion/styled';
import { GoPlusSmall } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
export const Th = styled.th`
  color: #9615db;
  height: 40px;
  min-width: 140px;
  padding: 10px 20px;
  text-align: left;
`;
export const Td = styled.td`
  padding: 10px 20px;
`;
export const MinusIcon = styled(FiMinus)`
  width: 12px;
  margin-right: 10px;
  color: #9615db;
  cursor: pointer;
`;
export const PlusIcon = styled(GoPlusSmall)`
  width: 12px;
  margin-left: 10px;
  color: #9615db;
  cursor: pointer;
`;
export const DeleteIcon = styled(MdDeleteForever)`
  width: 24px;
  height: 24px;
  color: #2d3032;
  margin-left: 60px;
  cursor: pointer;
  :hover {
    color: #9615db;
  }
`;
export const CartContainer = styled.div`
  display: inline-block;
  padding: 40px;
  background-color: #d2d3d3;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  min-width: 80px;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;
