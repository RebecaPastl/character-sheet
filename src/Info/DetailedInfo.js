import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function DetailedInfo(props) {

    return (

        <>
            <Form>
                <Form.Control type="name" as="textarea" rows={1} placeholder="Character's name" className="light-form title-text" />
                <Form.Control type="name-meaning" as="textarea" rows={1} className="light-form" />
                
                <Form.Text className="dark-header h6">
                    ORIGIN
                </Form.Text>
                <Form.Label>Nationality: </Form.Label>
                <Form.Control type="nationality" className="light-form"/>
                <Form.Label>Background: </Form.Label>
                <Form.Control type="background" className="light-form"/>
                <Form.Label>Origin: </Form.Label>
                <Form.Control type="origin" className="light-form"/>
                <Form.Label>Family: </Form.Label>
                <Form.Control type="family" as="textarea" rows={5} className="light-form"/>

                <Form.Text className="dark-header h6">
                    LOCATION
                </Form.Text>
                <Form.Label>Address: </Form.Label>
                <Form.Control type="address" className="light-form"/>
                <Form.Label>Home: </Form.Label>
                <Form.Control type="home" className="light-form"/>
                    
                <Form.Text className="dark-header h6">
                    EDUCATION AND OCCUPATION    
                </Form.Text>
                <Form.Label>Education level: </Form.Label>
                <Form.Control type="education-level" className="light-form"/>
                <Form.Label>Occupation: </Form.Label>
                <Form.Control type="ooccupation" className="light-form"/>

                <Form.Text className="dark-header h6">
                    INTERESTS AND PREFERENCES
                </Form.Text>
                <Form.Label>Hate: </Form.Label>
                <Form.Control type="hate" className="light-form"/>
                <Form.Label>Love: </Form.Label>
                <Form.Control type="love" className="light-form"/>
                <Form.Label>Hobbies: </Form.Label>
                <Form.Control type="hobbies" className="light-form"/>
                <Form.Label>Habits: </Form.Label>
                <Form.Control type="habits" className="light-form"/>
                <Form.Label>Dream: </Form.Label>
                <Form.Control type="dream" className="light-form"/>
                <Form.Label>Interests: </Form.Label>
                <Form.Control type="interests" className="light-form"/>

                <Button as="input" type="reset" value="Reset" ref={props.addToRefs} className="d-none"/>
            </Form>
        </>

    );
}

export default DetailedInfo;