import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Abilities(props){

    const [previewSymbol, setPreviewSymbol] = useState();
    const [selectedSymbol, setSelectedSymbol] = useState();

    // transfer click from symbol to input tag
    const hiddenSymbolInput = React.useRef(null);
    const handleSymbolClick = event => {
        hiddenSymbolInput.current.click();
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
                    <Card border="dark" className="d-block mx-auto my-2 w-50">
                        <Card.Img alt="Symbol image placeholder" src={previewSymbol || "/images/symbol-place-holder.png"} className="image" />
                        <Card.ImgOverlay>
                            <Card.Img alt="Upload button" src="/images/file-arrow-up-solid.svg" className="upload" onClick={handleSymbolClick} />
                        </Card.ImgOverlay>
                    </Card>
                    <Form.Control type="file" accept="image/*" ref={hiddenSymbolInput} onChange={handleSymbolSelection} className="d-none" />
                    
                    <Button as="input" type="reset" value="Reset" ref={props.addToRefs} className="d-none" onClick={() => setPreviewSymbol(undefined)}/>
                </Form>
            </div>
        </>
    );
}

export default Abilities;