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
      <AboutUs />
      <Team />
      <Alumni />
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
