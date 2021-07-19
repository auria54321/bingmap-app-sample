import logo from './logo.svg'
import { useState, useEffect } from 'react'
import BingMap from './components/BingMap'

import './App.css'
// import Map from './components/Map'

const SELECTIONS = {
    CORDS: 'CORDS',
    PLACE: 'PLACE',
}

function App() {
    const [coords, setCoords] = useState(null)
    const [type, setType] = useState(SELECTIONS.CORDS)
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    return (
        <div className="main-container">
            <div>
                <h3>Coordinates Form</h3>
                <div>
                    <input
                        type="radio"
                        id="cords"
                        name="f"
                        value="cords"
                        onChange={() => setType(SELECTIONS.CORDS)}
                        checked={type === SELECTIONS.CORDS}
                    />
                    <label htmlFor="cords">Cords</label>
                    <br />
                    <input
                        type="radio"
                        id="place"
                        name="f"
                        value="place"
                        onChange={() => setType(SELECTIONS.PLACE)}
                        checked={type === SELECTIONS.PLACE}
                    />
                    <label htmlFor="cords">Place</label>
                    <br />
                    <input
                        type="number"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                    />{' '}
                    <br />
                    <input
                        type="number"
                        value={long}
                        onChange={(e) => setLong(e.target.value)}
                    />{' '}
                    <br />
                    <button>Submit Coords</button>
                </div>
            </div>
            <div>
                <BingMap lat={lat} long={long} />
            </div>
        </div>
    )
}

export default App
