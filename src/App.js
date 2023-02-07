import React, { useRef, useState } from 'react';
import Navbar from './Navbar.js'
import Main from './Main.js'
import { useReactToPrint } from 'react-to-print';

function App() {

    // references to reset buttons
    const refsArray = useRef([])

    // gather all references for reset buttons
    const addToRefs = (el) => {
        if (el && !refsArray.current.includes(el)){
            refsArray.current.push(el)
        }
    }

    // when navbar button is pressed, press reset buttons by reference
    const resetForm = () => {
        refsArray.current.forEach( (item) => {
            item.click()
        })
    }

    // printing
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
        <>
            <Navbar handlePrint={handlePrint} resetForm={resetForm} />       
            <Main ref={componentRef} addToRefs={addToRefs} />     
        </>
    )
}

export default App;