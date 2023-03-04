import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
export const Twitter = styled(BsTwitter)`
  width: 40px;
  height: 40px;
  color: #d2d3d3;
  cursor: pointer;
  :hover,
  :focus {
    color: #9615db;
  }
`;
export const Facebook = styled(BsFacebook)`
  width: 40px;
  height: 40px;
  color: #d2d3d3;
  margin-left: 30px;
  cursor: pointer;
  :hover,
  :focus {
    color: #9615db;
  }
`;
export const Instagram = styled(BsInstagram)`
  width: 40px;
  height: 40px;
  color: #d2d3d3;
  margin-left: 30px;
  cursor: pointer;
  :hover,
  :focus {
    color: #9615db;
  }
`;
export const FooterContainer = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 10px 40px;
  background-color: #2d3032;
`;
export const Links = styled(NavLink)`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: #d2d3d3;
  margin: auto 0;
  text-decoration: none;
  :hover,
  :focus {
    color: #9615db;
  }
`;
export const SocMedContainer = styled.div`
  display: flex;
  margin: auto 0;
`;
