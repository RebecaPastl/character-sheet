import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function QuickInfo(props){

    const [previewCharacter, setPreviewCharacter] = useState();
    const [selectedCharacter, setSelectedCharacter] = useState();

    // transfer click from character to input tag
    const hiddenCharacterInput = React.useRef(null);
    const handleCharacterClick = event => {
        hiddenCharacterInput.current.click();
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

    return (
        <>
            <div className="p-3">

                <Form className="mb-5">
                    <Card border="dark" className="d-block mx-auto my-2">
                        <Card.Img alt="Character image placeholder" src={previewCharacter || "/images/character-imager-place-holder.png"} className="image" />
                        <Card.ImgOverlay>
                            <Card.Img alt="Upload button" src="/images/file-arrow-up-solid.svg" className="upload" onClick={handleCharacterClick} />
                        </Card.ImgOverlay>
                    </Card>
                    <Form.Control type="file" accept="image/*" ref={hiddenCharacterInput} onChange={handleCharacterSelection} className="d-none" />

                    <Form.Label className="text-narrow font-weight-bold">Avatar: </Form.Label>
                    <Form.Control type="avatar" className="dark-form"/>

                    <Form.Text className="header-narrow mt-4 h6 p-1">
                        PERSONAL
                    </Form.Text>
                    <Form.Label className="text-narrow">Gender: </Form.Label>
                    <Form.Control type="gender" className="dark-form"/>
                    <Form.Label className="text-narrow">Genetic sex: </Form.Label>
                    <Form.Control type="genetic-sex" className="dark-form"/>
                    <Form.Label className="text-narrow">Age: </Form.Label>
                    <Form.Control type="age" as="textarea" rows={3} className="dark-form"/>
                    <Form.Label className="text-narrow">Birth date: </Form.Label>
                    <Form.Control type="birth-date" className="dark-form"/>
                    <Form.Label className="text-narrow">Star sign: </Form.Label>
                    <Form.Control type="star-sign" className="dark-form"/>
                    <Form.Label className="text-narrow">Blood type: </Form.Label>
                    <Form.Control type="blood-type" className="dark-form"/>

                    <Form.Text className="header-narrow mt-4 h6 p-1">
                        APPEARANCE
                    </Form.Text>
                    <Form.Label className="text-narrow">Height: </Form.Label>
                    <Form.Control type="height" className="dark-form"/>
                    <Form.Label className="text-narrow">Weight: </Form.Label>
                    <Form.Control type="weight" className="dark-form"/>
                    <Form.Label className="text-narrow">Skin tone: </Form.Label>
                    <Form.Control type="skin-tone" className="dark-form"/>
                    <Form.Label className="text-narrow">Eye colour: </Form.Label>
                    <Form.Control type="eye-colour" className="dark-form"/>
                    <Form.Label className="text-narrow">Hair colour: </Form.Label>
                    <Form.Control type="hair-colour" className="dark-form"/>

                    <Button as="input" type="reset" value="Reset" ref={props.addToRefs} className="d-none" onClick={() => setPreviewCharacter(undefined)}/>
                </ Form>

            </div>
        </>
    );
}

export default QuickInfo;