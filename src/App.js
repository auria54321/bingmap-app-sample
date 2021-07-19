import logo from './logo.svg'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
    return (
        <div className="App">
            <Test name={'Shalom'} />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

const Test = (props) => {
    const [name, setName] = useState('Auria')
    return (
        <div>
            {name} Hello World {props.name}
            <button onClick={() => setName('Boris')}>Click Here</button>
        </div>
    )
}

export default App
