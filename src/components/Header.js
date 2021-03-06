import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo-white.png';


const StyledHeader = styled.div`
  position:${(props) => (props.page === 'home' ? 'absolute' : 'absolute')}; // second fixed
  width:100%;
  background: ${(props) => (props.page === 'home' ? 'none' : 'var(--header-bg)')};
  padding:5px 0px;
  top: 0px;
  z-index:999;

  a {
    color: white;
    text-decoration: none;
  }
  @media only screen and (max-width: 1081px) {
    background: ${(props) => (props.page === 'home' ? 'rgb(2,87,123,0.2)' : 'var(--header-bg)')};
  }

  .active {
    border-bottom: 2px solid white;
  }

`;

const StyledLogo = styled.div`
  margin-left: 40px;
  float:left;
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: calc(0.2vw + 0.8em);

  & img {
    width: 70px;
    margin-right:10px;
  }
`;

const StyledLinks = styled.div`
  margin-top:25px;
  float:right;
  margin-right:20px;

  & a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: calc(0.2vw + 0.8em);
    margin: 0px 30px;
    letter-spacing: 1px;
    font-family: 'Lato', sans-serif;
    padding-bottom:2px;
    border-bottom: 2px solid transparent;
  }

  & a:hover {
    border-bottom: 2px solid white;
  }
`;


const Header = ({ page }) => (
  <StyledHeader page={page} className="header">
    <StyledLogo>
      <Link to="/"><img alt="logo" src={logo} /></Link>
      <Link to="/">
        Computational Biology
        {' '}
        <br />
        {' '}
        and Medicine Program
      </Link>
    </StyledLogo>
    <StyledLinks className="header-links">
      <Link activeClassName="active" to="/research">Research</Link>
      <Link activeClassName="active" to="/software">Software</Link>
      <Link activeClassName="active" to="/web-apps">Web Apps</Link>
      <Link activeClassName="active" to="/datasets">Datasets</Link>
      <Link activeClassName="active" to="/publications">Publications</Link>
      <Link activeClassName="active" to="/contact">Contact</Link>
    </StyledLinks>
  </StyledHeader>
);


export default Header;
