import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Error404 } from "./pages";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
