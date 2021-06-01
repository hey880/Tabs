import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Setting } from "../img/settings.svg";
import { ReactComponent as Minimize } from "../img/minimize_24px.svg";
import "./Project.css";

function Project(props) {

  const panel = useRef(null);

  const resizeRight = () => {
    if (movementX <= panel.current.getBoundingClientRect().x) {
      panel.current.style.width = `${
        panel.current.getBoundingClientRect().width + movementX
      }px`;
    } else {
      panel.current.style.width = `${
        panel.current.getBoundingClientRect().width - movementX
      }px`;
    }
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

  return (
    <div className="Project_all">
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
