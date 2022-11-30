import { Home, Login, Public } from "./containers/public";
import { Routes, Route } from "react-router-dom";
import paths from "./utils/path";

function App() {
  return (
    <>
      <Routes>
        <Route path={paths.HOME} element={<Public />}>
          <Route path={paths.HOME} element={<Home />} />
          <Route path={paths.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
