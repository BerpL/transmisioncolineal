import React from "react";
import { GlobalStyle } from "./Styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Alineamiento from "./pages/Alineamiento";
import CambioRodamientos from "./pages/CambioRodamientos";
import MontajeSubestacionElectrica from "./pages/MontajeSubestacionElectrica";
import Transmision from "./pages/Transmision";
import Convertidor from "./pages/Convertidor";
import ValvulaPaso from "./pages/ValvulaPaso";
import GrupoElectrogeno from "./pages/GrupoElectrogeno";
import DesarmadoConvertidor from "./pages/DesarmadoConvertidor";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <ExternalApp />
          </Route>
          <Route path="/compresor"> */}
            <Transmision />
          </Route>          
        </Switch>
      </Router>

      <GlobalStyle />
    </div>
  );
}

export default App;
