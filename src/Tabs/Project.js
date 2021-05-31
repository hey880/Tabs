import React from 'react';
import {ReactComponent as Setting} from '../img/settings.svg';
import {ReactComponent as Minimize} from '../img/minimize_24px.svg';
import './Project.css';

function Project (props) {
    return (
        <div className="Project">
            <div className="Project_header">
            <span className="minimize_icon" onClick={()=>{
                return props.minimize();
            }}><Minimize/></span>
            <span className="setting_icon"><Setting/></span>
            </div>
            <div className="Project_panel">
                Project Panel
            </div>
        </div>
    )
}

export default Project;