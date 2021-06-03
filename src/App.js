import "./App.scss";
import { useState } from "react";
import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as FolderIcon } from "./img/folder_24px.svg";
import { ReactComponent as DeviceIcon } from "./img/phone_android_24px.svg";
import { ReactComponent as LocatorIcon } from "./img/my_location_24px_outlined.svg";
import Project from "./Tabs/Project";
import Device from "./Tabs/Device";
import Locator from "./Tabs/Locator";

function App() {
  
  const [project, setProject] = useState(false);
  const [device, setDevice] = useState(false);
  const [locator, setLocator] = useState(false);

  const unselected = "#3C3F41";
  const selected = "#2B2B2B";

  const minimize = {
    project : () => {
      setProject(false);
    },
    device: () => {
      setDevice(false);
    },
    locator: () => {
      setLocator(false);
    }
  }

  console.log(project)
  return (
    <div className="App">
      <header className="titlebar">
        <Logo className="logo" />
      </header>
      <div className="App__contents">
        <div className="App__contents_left_sidebar">
          <li
            style={{ background: project ? selected : unselected }}
            onClick={() => {
              return setProject(!project);
            }}
          >
            <FolderIcon className="folder_icon" />
            &nbsp;Project
          </li>
        </div>

        {project ? (
          <div className="App__contents_project_panel">
            <Project minimize={minimize.project} />
          </div>
        ) : null}

        <div className="App__contents_empty_panel">Empty</div>

        {device ? (
          <div className="App__contents_device_panel">
            <Device minimize={minimize.device} />
          </div>
        ) : null}

        {locator ? (
          <div className="App__contents_locator_panel">
            <Locator minimize={minimize.locator} />
          </div>
        ) : null}

        <div className="App__contents_right_sidebar">
          <li
            style={{ background: device ? selected : unselected }}
            onClick={() => {
              return locator
                ? setLocator(false) & setDevice(true)
                : setDevice(!device);
            }}
          >
            <DeviceIcon /> Device
          </li>

          <li
            style={{ background: locator ? selected : unselected }}
            onClick={() => {
              return device
                ? setDevice(false) & setLocator(true)
                : setLocator(!locator);
            }}
          >
            <LocatorIcon /> Locator
          </li>
        </div>
      </div>
    </div>
  );
}

export default App;
