import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound404 from "./Pages/NotFound404"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" exact element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
