import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./containers/Home";
import NavigateExample from "./containers/NavigateExample";
import QueryParam from "./containers/QueryParam";
import AppLayout from "./containers/Layout/AppLayout";
import ExampleUseMemo from "./containers/ExampleUseMemo";
import { StylingPage } from "./containers/StylingPage";
import { StoreExample } from "./containers/StoreExample";
import { TypescriptExample } from "./containers/TypescriptExample";
import MapExample from "./containers/MapExample";

import "./styles/global.scss";

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
        <Route path="/navigate-example" element={<NavigateExample />} />
        <Route
          path="/query/:id"
          element={
            <AppLayout>
              <QueryParam />
            </AppLayout>
          }
        />
        <Route
          path="/example-use-memo"
          element={
            <AppLayout>
              <ExampleUseMemo />
            </AppLayout>
          }
        />
        <Route
          path="/store-example"
          element={
            <AppLayout>
              <StoreExample />
            </AppLayout>
          }
        />
        <Route
          path="/map-example"
          element={
            <AppLayout>
              <MapExample />
            </AppLayout>
          }
        />
        <Route
          path="/styling-scss-page"
          element={
            <AppLayout>
              <StylingPage />
            </AppLayout>
          }
        />
        <Route
          path="/typescript-page"
          element={
            <AppLayout>
              <TypescriptExample />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
