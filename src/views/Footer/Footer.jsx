import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

import "./Footer.scss";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { 
    copyright,
   } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col className="copyright credit">
            <div className="nameAndLink">
              ©&nbsp;
                Stephan Sekula
              , 2023
            </div>
          </Col> {/* copyright */}
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
