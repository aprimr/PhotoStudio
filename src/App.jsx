import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Hero />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
