import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Error404 } from "./pages";
const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
