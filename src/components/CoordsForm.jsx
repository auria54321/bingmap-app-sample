import { useState } from 'react'
import './CoordsForm.css'
import { SELECTIONS } from '../enums'

// TODO: split Coords / Place Forms to smaller components
// const CoordsFormLatLong = () => {}

const CoordsForm = ({ handleSubmit, handleReset }) => {
    const [type, setType] = useState(SELECTIONS.CORDS)
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)

    const handleChange = (e) => {
        if (e.target.name === 'submit') {
            handleSubmit([lat, long])
        }
        if (e.target.name === 'reset') {
            handleReset([lat, long])
        }
    }

    return (
        <div className="form-container">
            <h3>Coordinates Form</h3>
            <div>
                <input
                    type="radio"
                    id="cords"
                    name="selections"
                    value="cords"
                    onChange={() => setType(SELECTIONS.CORDS)}
                    checked={type === SELECTIONS.CORDS}
                />
                <label htmlFor="cords">Cords</label>
                <br />
                <input
                    type="radio"
                    id="place"
                    name="selections"
                    value="place"
                    onChange={() => setType(SELECTIONS.PLACE)}
                    checked={type === SELECTIONS.PLACE}
                />
                <label htmlFor="cords">Place</label>
                <br />
                {type === SELECTIONS.PLACE && 'Not Implemented Yet'}
                {type === SELECTIONS.CORDS && (
                    <div className="lat-long-input">
                        <label>lat: </label>
                        <input
                            type="number"
                            value={lat}
                            onChange={(e) => setLat(parseFloat(e.target.value))}
                        />{' '}
                        <br />
                        <label>long: </label>
                        <input
                            type="number"
                            value={long}
                            onChange={(e) =>
                                setLong(parseFloat(e.target.value))
                            }
                        />{' '}
                        <br />
                        <button
                            className="btn"
                            name="submit"
                            onClick={handleChange}
                        >
                            Submit Coords
                        </button>
                        <button
                            className="btn"
                            name="reset"
                            onClick={handleChange}
                        >
                            RESET
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CoordsForm
