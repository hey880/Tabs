import "./App.css";
import { useState } from "react";
import {ReactComponent as Logo} from './img/logo.svg';
import {ReactComponent as FolderIcon} from './img/folder_24px.svg';
import {ReactComponent as DeviceIcon} from './img/phone_android_24px.svg';
import {ReactComponent as LocatorIcon} from './img/my_location_24px_outlined.svg';
import Project from "./Tabs/Project";
import Device from "./Tabs/Device";
import Locator from "./Tabs/Locator";

function App() {

  const project_minimize = () => {
    setProject(false);
  }

  const device_minimize = () => {
    setDevice(false);
  }

  const locator_minimize = () => {
    setLocator(false);
  }

  const [project, setProject] = useState(false);
  const [device, setDevice] = useState(false);
  const [locator, setLocator] = useState(false);

  console.log(project, device, locator);

  return (
    <div className="App">
      <header className="titlebar">
        <Logo className="logo"/>
      </header>
      <div className="App__contents">
        <div className="App__left_tab">
          
          <li style={{ background:
            project ? "#2B2B2B": "#3C3F41"
          }}
            onClick={() => {
              return (setProject(!project));
            }}
          >
            <FolderIcon className="folder_icon"/>&nbsp;Project
          </li>
        </div>

        {project ? (
          
          <div className="Project_Panel">
            <Project minimize={project_minimize}/>
            <div className="splitter"></div>
          </div>
        
        ) : null}

        <div className="App__empty">Empty</div>
  
        {device ? (
          <div className="Device_Panel">
            <div className="splitter"></div>
            <Device minimize={device_minimize}/>
          </div>
        ) : null}

        {locator ? (
          <div className="Locator_Panel">
            <div className="splitter"></div>
            <Locator minimize={locator_minimize}/>
          </div>
        ) : null}

        <div className="App__right_tab">
          <li style={{ background:
            device ? "#2B2B2B": "#3C3F41"
          }}
            onClick={() => {
              return (
                locator ? setLocator(false) & setDevice(true) : setDevice(!device)
              );
            }}
          >
            <DeviceIcon/> Device
          </li>

          <li style={{ background:
            locator ? "#2B2B2B": "#3C3F41"
          }}
            onClick={() => {
              return (
                device ? setDevice(false) & setLocator(true) : setLocator(!locator)
              );
            }}
          >
            <LocatorIcon/> Locator
          </li>
        </div>
      </div>
    </div>
  );
}

export default App;
