import React from 'react';
import QuickInfo from './Info/QuickInfo.js'
import DetailedInfo from './Info/DetailedInfo.js'
import History from './Info/History.js'
import Abilities from './Info/Abilities.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// react-to-print needs a ref and functional components only work with 
// forwardRef, which needs to envelop the functional component, reason
// why the Main component is written in this format
const Main = React.forwardRef((props, ref) => {

    return (
        <>
            <Container className='my-5' ref={ref}>
                <Row>
                    <Col sm={4} style={{backgroundColor: '#000000'}} className="mt-5" ><QuickInfo addToRefs={props.addToRefs} /></Col>
                    <Col sm={8} className="mt-5"><DetailedInfo addToRefs={props.addToRefs}/></Col>
                </Row>
                <Row>
                    <Col sm={4} style={{backgroundColor: '#000000'}}><Abilities addToRefs={props.addToRefs}/></Col>
                    <Col sm={8}><History addToRefs={props.addToRefs}/></Col>
                </Row>
            </Container>
        </>
    )

});

export default Main;