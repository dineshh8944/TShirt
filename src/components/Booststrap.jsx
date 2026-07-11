import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const Booststrap = () => {
  return (
    <>
       <div className='boot'>
            <Container>
              <Row>
                <Col lg={6} md={12} sm={6} xs={12}>
                <h1>hello</h1>
                </Col>
                <Col lg={6} md={12} sm={6} xs={12}>
                <h1>hello</h1>
                </Col>
              </Row>
            </Container>
        </div>
    </>
  )
}

export default Booststrap
