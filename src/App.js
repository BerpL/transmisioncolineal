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
            <Home />
          </Route>
          <Route path="/alineamiento">
            <Alineamiento />
          </Route>
          <Route path="/cambio-rodamientos">
            <CambioRodamientos />
          </Route>
          <Route path="/montaje-subestacion-electrica">
            <MontajeSubestacionElectrica />
          </Route>
          <Route path="/transmision">
            <Transmision />
          </Route>
          <Route path="/convertidor">
            <Convertidor />
          </Route>
          <Route path="/grupo-electrogeno">
            <GrupoElectrogeno />
          </Route>
          <Route path="/valvula">
            <ValvulaPaso />
          </Route>
          <Route path="/desarmado-convertidor">
            <DesarmadoConvertidor />
          </Route>
        </Switch>
      </Router>

      <GlobalStyle />
    </div>
  );
}

export default App;
