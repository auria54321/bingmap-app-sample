import logo from './logo.svg'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
    return (
        <div className="main-container">
            <div>
                <h3>Coordinates Form</h3>
                <div>
                    <input type="radio" id="cords" name="f" value="cords" />
                    <label for="cords">Cords</label>
                    <br />
                    <input type="radio" id="place" name="f" value="place" />
                    <label for="cords">Place</label>
                    <br />
                    <input type="text" /> <br />
                    <input type="text" /> <br />
                    <button>Submit Coords</button>
                </div>
            </div>
        </div>
    )
}

export default App
