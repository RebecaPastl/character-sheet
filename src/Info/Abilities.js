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
    const [valueAbility1, setValueAbility1] = useState(0);
    const [valueAbility2, setValueAbility2] = useState(0);
    const [valueAbility3, setValueAbility3] = useState(0);
    const [changeValueAbility1, setChangeValueAbility1] = useState(false);
    const [changeValueAbility2, setChangeValueAbility2] = useState(false);
    const [changeValueAbility3, setChangeValueAbility3] = useState(false);

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
                    <Form.Text className="header-narrow mt-4 h6 p-1">
                        ABILITIES
                    </Form.Text>
                    <Form.Label className="text-narrow">Weapon: </Form.Label>
                    <Form.Control type="weapon" className="dark-form"/>
                    <Form.Label className="text-narrow">Animal: </Form.Label>
                    <Form.Control type="animal" className="dark-form"/>
                    <Form.Label className="text-narrow">Talisman: </Form.Label>
                    <Form.Control type="talisman" className="dark-form"/>
                    <div className="my-3">
                        <Row className="my-1">
                            <Col sm={4}>
                                {changeValueAbility1
                                    ? <Form.Control type="valueAbility1" className="dark-form" onBlur={e => { setValueAbility1( e.target.value ); setChangeValueAbility1(false)} } />
                                    : <ProgressBar now={valueAbility1} onClick={() => setChangeValueAbility1(true) } />
                                }
                            </Col>
                            <Col sm={8}>
                                <Form.Control type="ability1" size="sm" className="dark-form"/>
                            </Col>
                        </Row>
                        <Row className="my-1">
                            <Col sm={4}>
                                {changeValueAbility2
                                    ? <Form.Control type="valueAbility2" className="dark-form" onBlur={e => { setValueAbility2( e.target.value ); setChangeValueAbility2(false)} } />
                                    : <ProgressBar now={valueAbility2} onClick={() => setChangeValueAbility2(true) } />
                                }
                            </Col>
                            <Col sm={8}>
                                <Form.Control type="ability2" size="sm" className="dark-form"/>
                            </Col>
                        </Row>
                        <Row className="my-1">
                            <Col sm={4}>
                                {changeValueAbility3
                                    ? <Form.Control type="valueAbility3" className="dark-form" onBlur={e => { setValueAbility3( e.target.value ); setChangeValueAbility3(false)} } />
                                    : <ProgressBar now={valueAbility3} onClick={() => setChangeValueAbility3(true) } />
                                }
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
                    
                    <Button as="input" type="reset" value="Reset" ref={props.addToRefs} className="d-none" onClick={() => {setPreviewSymbol(undefined); setValueAbility1(0); setValueAbility2(0); setValueAbility3(0)}}/>
                </Form>
            </div>
        </>
    );
}

export default Abilities;