import { Tweet } from "./components/Tweet";
import "./App.css";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <Tweet username="JuanDC" name="Juan David">
        <p>Adios mundo</p>
        <img src="https://picsum.photos/540" alt="Img" />
      </Tweet>
      <Tweet username="LeoCode0" name="Leonardo Espinoza">
        <p>Hola Mundo</p>
        <img src="https://picsum.photos/400" alt="Img" />
      </Tweet>
      <Tweet username="CelisMX" name="ricardo celis">
        <p>Final tuit 👀</p>
        <img src="https://picsum.photos/920" alt="img" />
      </Tweet>

      <Timeline />
    </div>
  );
}
