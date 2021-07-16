import React from 'react';
import PropTypes from 'prop-types';
import {Container , Row , Col} from 'reactstrap'
import './Header.scss'
import { NavLink } from 'react-router-dom';
Header.propTypes = {

};

function Header(props) {
  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a 
              className="header__link header__title"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Easy Frontend
            </a>
          </Col>
          <Col xs="auto">
            <NavLink 
              className="header__link"
              to="/photo"
              activeClassName="header__link--active"
              exact
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;