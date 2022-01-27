import './styles/App.scss';
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Alumni } from "./components/Alumni/Alumni";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* TODO: put all sections */}
      <Header/>
      <AboutUs />
      <Alumni />
    </div>
  );
}

export default App;
