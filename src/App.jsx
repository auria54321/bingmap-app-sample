import { useState } from 'react'

import BingMap from './components/BingMap.jsx'
import CoordsForm from './components/CoordsForm.jsx'

import './App.css'

function App() {
    const [points, setPoints] = useState([])
    console.log(points)

    const handleSumbit = (newPoints) => {
        setPoints([...points, newPoints])
    }

    const handleReset = () => {
        setPoints([])
    }

    return (
        <div className="main-container">
            <CoordsForm handleSubmit={handleSumbit} handleReset={handleReset} />
            <div className="map-container">
                <BingMap points={points} />
            </div>
        </div>
    )
}

export default App
