import React from 'react';
import Form from 'react-bootstrap/Form'

class History extends React.Component {

    render() {
        
        return (

            <>
                <Form>
                <Form.Text className="dark-header h6">HISTORY</Form.Text>
                <Form.Control type="history" as="textarea" rows={30} className="light-form"/>
                </Form>
            </>

        );
    }
}

export default History;