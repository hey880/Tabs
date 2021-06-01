import React, {useState, useRef, useEffect} from 'react';
import {ReactComponent as Setting} from '../img/settings.svg';
import {ReactComponent as Minimize} from '../img/minimize_24px.svg';
import './Locator.css';

function Device (props) {

    const panel = useRef(null);

  const resizeRight = () => {

      panel.current.style.width = `${
        panel.current.getBoundingClientRect().width - movementX
      }px`;
 
  };

  const [movementX, setMovementX] = useState();

  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = () => {
    setMouseDown(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mouseDown) return;
      setMovementX(e.movementX);
      console.log(e.movementX, e.movementY);
    };

    if (mouseDown) {
      window.addEventListener("mousemove", handleMouseMove);
      resizeRight();
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseDown, movementX]);

  useEffect(() => {
    const handleMouseUp = (e) => setMouseDown(false);

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      setMouseDown(false);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

    return <div className="Locator_all">
        <div className="Locator" ref={panel}>
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
        <div
        className="Locator_splitter"
        onMouseDown={() => {
            return handleMouseDown();
        }}
        ></div>
    </div>
}

export default Device;