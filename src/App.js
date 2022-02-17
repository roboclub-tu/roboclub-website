import './styles/App.scss';
import { AboutUs } from "./components/AboutUs/AboutUs";
//eslint-disable-next-line
import { Alumni } from "./components/Alumni/Alumni";
import { Header } from "./components/Header/Header";
//eslint-disable-next-line
import {Contacts} from "./components/Contacts/Contacts"
import {Team} from "./components/Team/Team"
import {Projects} from "./components/Projects/Projects"
import {Welcome} from "./components/Welcome/Welcome"
function App() {
  return (
    <div className="App">
      {/* TODO: put all sections */}
      <Header/>
      <Welcome />
      <Team />
      <AboutUs />
      <Projects/>
    </div>
  );
}

export default App;
