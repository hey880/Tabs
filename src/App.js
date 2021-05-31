import './App.css';
import Project from './Tabs/Project';
import Device from './Tabs/Device';
import Locator from './Tabs/Locator';

function App() {
  return (
    <div className="App">
      <div>
        <Project/>
      </div>
      EMPTY
      <div>
        <Device/>
      </div>
      <div>
        <Locator/>
      </div>
    </div>
  );
}

export default App;
