import "./App.css";
import { useState } from "react";
import { FaRegFolder, FaMobileAlt } from "react-icons/fa";
import logo from "./img/logo.png";
import Project from "./Tabs/Project";
import Device from "./Tabs/Device";
import Locator from "./Tabs/Locator";

function App() {
  const [project, setProject] = useState(false);
  const [device, setDevice] = useState(false);
  const [locator, setLocator] = useState(false);

  return (
    <div className="App">
      <header className="titlebar">
        <img src={logo} alt="AppTestAI_Company_Logo" />
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
            <FaRegFolder className="project_icon" size="20"/>&nbsp;Project
          </li>
        </div>

        {project ? (
          
          <div className="Project_Panel">
            <Project />
            <div className="splitter"></div>
          </div>
        
        ) : null}

        <div className="App__empty">Empty</div>
  
        {device ? (
          <div className="Device_Panel">
            <div className="splitter"></div>
            <FaMobileAlt/>
            <Device />
          </div>
        ) : null}

        {locator ? (
          <div className="Locator_Panel">
            <div className="splitter"></div>
            <Locator />
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
            Device
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
            Locator
          </li>
        </div>
      </div>
    </div>
  );
}

export default App;
