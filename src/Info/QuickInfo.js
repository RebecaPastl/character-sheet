import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'

function QuickInfo(){

    const [previewCharacter, setPreviewCharacter] = useState();
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [previewSymbol, setPreviewSymbol] = useState();
    const [selectedSymbol, setSelectedSymbol] = useState();

    // transfer click from character to input tag
    const hiddenCharacterInput = React.useRef(null);
    const handleCharacterClick = event => {
        hiddenCharacterInput.current.click();
    };

    // transfer click from symbol to input tag
    const hiddenSymbolInput = React.useRef(null);
    const handleSymbolClick = event => {
        hiddenSymbolInput.current.click();
    };    
        
    // selecting character image
    const handleCharacterSelection = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedCharacter(undefined)
            // pop up a modal
            console.log("Invalid character image or No character image selected.")
            return
        }
        setSelectedCharacter(event.target.files[0])
    };
    
    // selecting symbol image
    const handleSymbolSelection = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedSymbol(undefined)
            // pop up a modal
            console.log("Invalid symbol image or No symbol image selected.")
            return
        }
        setSelectedSymbol(event.target.files[0])
    };    

    // previewing character image
    useEffect(() => {
        if (!selectedCharacter) {
            setPreviewCharacter(undefined)
            return
        }

        const characterObjectUrl = URL.createObjectURL(selectedCharacter)
        setPreviewCharacter(characterObjectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(characterObjectUrl)
    }, [selectedCharacter]);

    // previewing symbol image
    useEffect(() => {
        if (!selectedSymbol) {
            setPreviewSymbol(undefined)
            return
        }

        const symbolObjectUrl = URL.createObjectURL(selectedSymbol)
        setPreviewSymbol(symbolObjectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(symbolObjectUrl)
    }, [selectedSymbol]);    

    return (
        <>
            <div className="p-3">

                <Form>
                    <Card border="dark" className="d-block mx-auto my-2">
                        <Card.Img alt="Character image placeholder" src={previewCharacter || "/images/character-imager-place-holder.png"} className="image" />
                        <Card.ImgOverlay>
                            <Card.Img alt="Upload button" src="/images/file-arrow-up-solid.svg" className="upload" onClick={handleCharacterClick} />
                        </Card.ImgOverlay>
                    </Card>
                    <Form.Control type="file" accept="image/*" ref={hiddenCharacterInput} onChange={handleCharacterSelection} className="d-none" />
                </Form>
                    
                <Form className="mb-5">
                    <Form.Label className="text-white font-weight-bold">Avatar: </Form.Label>
                    <Form.Control type="avatar" className="dark-form"/>

                    <Form.Text className="bg-light mt-4 h6 p-1">
                        PERSONAL
                    </Form.Text>
                    <Form.Label className="text-white">Gender: </Form.Label>
                    <Form.Control type="gender" className="dark-form"/>
                    <Form.Label className="text-white">Genetic sex: </Form.Label>
                    <Form.Control type="genetic-sex" className="dark-form"/>
                    <Form.Label className="text-white">Age: </Form.Label>
                    <Form.Control type="age" as="textarea" rows={3} className="dark-form"/>
                    <Form.Label className="text-white">Birth date: </Form.Label>
                    <Form.Control type="birth-date" className="dark-form"/>
                    <Form.Label className="text-white">Star sign: </Form.Label>
                    <Form.Control type="star-sign" className="dark-form"/>
                    <Form.Label className="text-white">Blood type: </Form.Label>
                    <Form.Control type="blood-type" className="dark-form"/>

                    <Form.Text className="bg-light mt-4 h6 p-1">
                        APPEARANCE
                    </Form.Text>
                    <Form.Label className="text-white">Height: </Form.Label>
                    <Form.Control type="height" className="dark-form"/>
                    <Form.Label className="text-white">Weight: </Form.Label>
                    <Form.Control type="weight" className="dark-form"/>
                    <Form.Label className="text-white">Skin tone: </Form.Label>
                    <Form.Control type="skin-tone" className="dark-form"/>
                    <Form.Label className="text-white">Eye colour: </Form.Label>
                    <Form.Control type="eye-colour" className="dark-form"/>
                    <Form.Label className="text-white">Hair colour: </Form.Label>
                    <Form.Control type="hair-colour" className="dark-form"/>

                    <Form.Text className="bg-light mt-4 h6 p-1">
                        ABILITIES
                    </Form.Text>
                    <Form.Label className="text-white">Weapon: </Form.Label>
                    <Form.Control type="weapon" className="dark-form"/>
                    <Form.Label className="text-white">Animal: </Form.Label>
                    <Form.Control type="animal" className="dark-form"/>
                    <Form.Label className="text-white">Talisman: </Form.Label>
                    <Form.Control type="talisman" className="dark-form"/>
                    <div className="my-3">
                        <Row className="my-1">
                            <Col sm={4}>
                                <ProgressBar now={40} />
                            </Col>
                            <Col sm={8}>
                                <Form.Control type="ability1" size="sm" className="dark-form"/>
                            </Col>
                        </Row>
                        <Row className="my-1">
                            <Col sm={4}>
                                <ProgressBar now={40} />
                            </Col>
                            <Col sm={8}>
                                <Form.Control type="ability2" size="sm" className="dark-form"/>
                            </Col>
                        </Row>
                        <Row className="my-1">
                            <Col sm={4}>
                                <ProgressBar now={40} />
                            </Col>
                            <Col sm={8}>
                                <Form.Control type="ability3" size="sm" className="dark-form"/>
                            </Col>
                        </Row>
                    </div>
                </ Form>
                <Form>
                    <Card border="dark" className="d-block mx-auto my-2 w-50">
                        <Card.Img alt="Symbol image placeholder" src={previewSymbol || "/images/symbol-place-holder.png"} className="image" />
                        <Card.ImgOverlay>
                            <Card.Img alt="Upload button" src="/images/file-arrow-up-solid.svg" className="upload" onClick={handleSymbolClick} />
                        </Card.ImgOverlay>
                    </Card>
                    <Form.Control type="file" accept="image/*" ref={hiddenSymbolInput} onChange={handleSymbolSelection} className="d-none" />
                </Form>
            </div>
        </>
    );
}

export default QuickInfo;