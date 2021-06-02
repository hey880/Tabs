import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Setting } from "../img/settings.svg";
import { ReactComponent as Minimize } from "../img/minimize_24px.svg";
import "./Device.scss";

function Device(props) {

  const panel = useRef(null);
  const [movementX, setMovementX] = useState();
  const [mouseDown, setMouseDown] = useState(false);

  const resize = () => {
    panel.current.style.width = `${
      panel.current.getBoundingClientRect().width - movementX
    }px`;
  };

  const handleMouseDown = () => {
    setMouseDown(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mouseDown) return;
      setMovementX(e.movementX);
    };

    if (mouseDown) {
      window.addEventListener("mousemove", handleMouseMove);
      resize();
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseDown, movementX]);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="Device_container">
      <div
        className="Device_splitter"
        onMouseDown={() => {
          return handleMouseDown();
        }}
      ></div>
      <div className="Device" ref={panel}>
        <div className="Device_header">
          <span className="setting_icon">
            <Setting />
          </span>
          <span
            className="minimize_icon"
            onClick={() => {
              return props.minimize();
            }}
          >
            <Minimize />
          </span>
        </div>
        <div className="Device_panel">Device Panel</div>
      </div>
    </div>
  );
}

export default Device;
