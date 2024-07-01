import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "/assets/Logo.png";

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <Navigations>
        <Link to="/">Home</Link>
        <Link to="/experience">Projects</Link>
        <Link to="/skills">Skills</Link>
      </Navigations>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  background: #1a0b2e;
  box-shadow: 0px 6px 22px -3px rgba(0, 0, 0, 0.1);
  padding: 2.7rem 17rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.4px;
    text-decoration: none;
  }
`;

const Navigations = styled.div`
  display: flex;
  gap: 6rem;
`;
