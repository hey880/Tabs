import React from 'react';
import {ReactComponent as Setting} from '../img/settings.svg';
import {ReactComponent as Minimize} from '../img/minimize_24px.svg';
import './Locator.css';

function Locator (props) {
    return <div className="Locator">
        <div className="Locator_header">
        <span className="setting_icon"><Setting/></span>
            <span className="minimize_icon" onClick={()=>{
                return props.minimize();
            }}><Minimize/></span>
        </div>
        <div className="Locator_panel">
            Locator Panel
        </div>
    </div>
}

export default Locator;