import React from 'react';
import QuickInfo from './Info/QuickInfo.js'
import DetailedInfo from './Info/DetailedInfo.js'
import History from './Info/History.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// react-to-print needs a ref and functional components only work with 
// forwardRef, which needs to envelop the functional component, reason
// why the Main component is written in this format
const Main = React.forwardRef((_, ref) => (

        <>
            <Container className='my-5' ref={ref}>
                <Row>
                    <Col sm={4} style={{backgroundColor: '#000000'}} className="mt-5" ><QuickInfo /></Col>
                    <Col sm={8} className="mt-5"><DetailedInfo /></Col>
                </Row>
                <Row>
                    <Col sm={4} style={{backgroundColor: '#000000'}} />
                    <Col sm={8}><History /></Col>
                </Row>
            </Container>
        </>

));

export default Main;