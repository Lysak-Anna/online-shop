import styled from "@emotion/styled";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #9615db;
`;
export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: transparent;
  background-color: transparent;
  color: #2d3032;
  cursor: pointer;
`;
export const CloseButton = styled(GrFormClose)`
  width: 20px;
  height: 20px;
`;
export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  position: relative;
  padding: 40px 20px;
  border-radius: 4px;
  background-color: white;
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
