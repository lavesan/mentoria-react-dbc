import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import QueryParam from "./containers/QueryParam";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/query/:id" element={<QueryParam />} />
        </Routes>
        <footer>Rodapé</footer>
      </Router>
    </div>
  );
}

export default App;
