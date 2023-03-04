import styled from "@emotion/styled";
import { FcGoogle } from "react-icons/fc";
export const GoogleIcon = styled(FcGoogle)`
  position: absolute;
  left: 10px;
`;
export const FormContainer = styled.div`
  display: inline-block;
  background-color: #d2d3d3;
  padding: 40px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  display: block;
  padding: 8px 12px;
  margin-bottom: 20px;
  min-width: 250px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #555759;
  outline: transparent;
  :hover,
  :focus {
    border-color: #9615db;
  }
`;
export const FormButton = styled.button`
  min-width: 250px;
  height: 30px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: #9615db;
  border-color: transparent;
`;
export const Line = styled.p`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  ::before {
    position: absolute;
    content: "";
    display: block;
    border: 1px solid #555759;
    width: 110px;
    bottom: 6px;
  }
  ::after {
    position: absolute;
    content: "";
    display: block;
    border: 1px solid #555759;
    width: 110px;
    bottom: 6px;
    right: 0;
  }
`;
export const GoogleButton = styled.button`
  position: relative;
  min-width: 250px;
  height: 30px;
  border-radius: 4px;
  border-color: transparent;

  font-weight: 600;
  cursor: pointer;
`;
