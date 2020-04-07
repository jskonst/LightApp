import React from 'react';
import './App.css';
import {Light} from '../Light/Light';
import Wires from '../Wires/Wires';

const App: React.FC = () => {
    return (
        <div className="App">
            <Light/>
            {/* <Wires/> */}
        </div>
    );
}

export default App;
