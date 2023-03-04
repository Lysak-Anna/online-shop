import styled from "@emotion/styled";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const LogoutIcon = styled(RiLogoutBoxRLine)`
  position: absolute;
  top: 18px;
  right: 4px;
  width: 40px;
  height: 40px;
  color: #555759;
  :hover,
  :focus {
    color: #9615db;
  }
`;
export const LogoutButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;
