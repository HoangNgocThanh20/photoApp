import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';


function Header() {
  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a 
              className="header__link header__title"
              href="https://github.com/HoangNgocThanhProGit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MY GIT
            </a>
          </Col>
          <Col xs="auto">
            <NavLink 
              className="header__link"
              to="/Sign-in"
              activeClassName="header__link--active"
              exact
            >
              SignIn
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;