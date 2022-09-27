import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import QueryParam from "./containers/QueryParam";
import AppLayout from "./containers/Layout/AppLayout";
import ExampleUseMemo from "./containers/ExampleUseMemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route path="/sobre" element={<About />} />
        <Route
          path="/query/:id"
          element={
            <AppLayout>
              <QueryParam />
            </AppLayout>
          }
        />
        <Route
          path="/query/:id"
          element={
            <AppLayout>
              <ExampleUseMemo />
            </AppLayout>
          }
        />
      </Routes>
      <footer>Rodapé</footer>
    </Router>
  );
}

export default App;
