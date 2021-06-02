import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Setting } from "../img/settings.svg";
import { ReactComponent as Minimize } from "../img/minimize_24px.svg";
import "./Project.scss";

function Project(props) {

  const panel = useRef(null);
  const [movementX, setMovementX] = useState();
  const [mouseDown, setMouseDown] = useState(false);

  const resize = () => {
    panel.current.style.width = `${
      panel.current.getBoundingClientRect().width + movementX
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
      setMouseDown(false);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="Project_container">
      <div className="Project" ref={panel}>
        <div className="Project_header">
          <span
            className="minimize_icon"
            onClick={() => {
              return props.minimize();
            }}
          >
            <Minimize />
          </span>
          <span className="setting_icon">
            <Setting />
          </span>
        </div>
        <div className="Project_panel">Project Panel</div>
      </div>
      <div
        className="Project_splitter"
        onMouseDown={() => {
          return handleMouseDown();
        }}
      ></div>
    </div>
  );
}

export default Project;
