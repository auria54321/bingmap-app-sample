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
    const [type, setType] = useState(SELECTIONS.CORDS)
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [pushPins, setPushPins] = useState([])
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
                    {type === SELECTIONS.PLACE && 'Not Implemented Yet'}
                    {type === SELECTIONS.CORDS && (
                        <div>
                            <input
                                type="number"
                                value={lat}
                                onChange={(e) =>
                                    setLat(parseFloat(e.target.value))
                                }
                            />{' '}
                            <br />
                            <input
                                type="number"
                                value={long}
                                onChange={(e) =>
                                    setLong(parseFloat(e.target.value))
                                }
                            />{' '}
                            <br />
                            <button
                                onClick={() =>
                                    setPushPins([
                                        ...pushPins,
                                        {
                                            center: {
                                                latitude: lat,
                                                longitude: long,
                                            },
                                        },
                                    ])
                                }
                            >
                                Submit Coords
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="map-container">
                <BingMap pushPins={pushPins} />
            </div>
        </div>
    )
}

export default App
