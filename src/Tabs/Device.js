import React from 'react';
import {ReactComponent as Setting} from '../img/settings.svg';
import {ReactComponent as Minimize} from '../img/minimize_24px.svg';
import './Device.css';

function Device (props) {
    return <div className="Device">
        <div className="Device_header">
            <span className="setting_icon"><Setting/></span>
            <span className="minimize_icon" onClick={()=>{
                return props.minimize();
            }}><Minimize/></span>
        </div>
        <div className="Device_panel">
            Device Panel
        </div>
    </div>
}

export default Device;