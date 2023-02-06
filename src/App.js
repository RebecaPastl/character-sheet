import React, { useRef } from 'react';
import Navbar from './Navbar.js'
import Main from './Main.js'
import { useReactToPrint } from 'react-to-print';

function App() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
        
    return (
        <>
            <Navbar handlePrint={handlePrint}/>       
            <Main ref={componentRef}/>     
        </>
    )
}

export default App;