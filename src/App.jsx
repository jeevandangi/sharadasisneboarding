import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

const renderRoutes = (routes) =>
  routes.map(({ path, element, children }, index) => (
    <Route key={index} path={path} element={element}>
      {children &&
        children.map((child, i) => (
          <Route key={i} path={child.path} element={child.element} />
        ))}
    </Route>
  ));

function App() {
  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes>
    </Router>
  );
}

export default App;
