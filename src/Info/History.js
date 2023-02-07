import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function History(props) {

    return (

        <>
            <Form>
                <Form.Text className="dark-header h6">HISTORY</Form.Text>
                <Form.Control type="history" as="textarea" rows={55} className="light-form"/>
                <Button as="input" type="reset" value="Reset" ref={props.addToRefs} className="d-none"/>
            </Form>
        </>

    );

}

export default History;