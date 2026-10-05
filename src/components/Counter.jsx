import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
function Counter() {
    const [count, setCount] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {

        if (running) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000)

            return () => clearInterval(timer)
        }

    }, [running])

    function start() {
        setRunning(true)
    }

    function stop() {
        setRunning(false)
    }

    function reset() {
        setCount(0)
        setRunning(false)
    }
    return (
        <div> 
            <div style={{ marginTop: "100px" }}> 
                <div className="container mt-5 rounded border border-dark"> 
                    <h1 className="text-center text-danger"> Counter Application </h1> 
                    <h2 className="text-center fw-bolder m-5"> {count} </h2>
                <div className="d-flex justify-content-center m-5"> 
                    <Button variant="warning" className="m-2" onClick={start} > Start </Button> 
                    <Button variant="danger" className="m-2" onClick={stop} > Stop </Button> 
                    <Button variant="success" className="m-2" onClick={reset} > Reset </Button> 
                    </div>
            </div>
        </div>
        </div >
    )
}

export default Counter