import './styles/App.scss';
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Alumni } from "./components/Alumni/Alumni";
import { Header } from "./components/Header/Header";
import {Contacts} from "./components/Contacts/Contacts"
import {Team} from "./components/Team/Team"
import {Projects} from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
      {/* TODO: put all sections */}
      <Header/>
      <div className="content">
      <AboutUs />
      <Team />
      <Alumni />
      <Projects/>
      <Contacts/>
      </div>
    </div>
  );
}

export default App;
