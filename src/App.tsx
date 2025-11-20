import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";
import About from "./pages/about";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <Routes>
        {/* Layout */}
        <Route element={<MainLayout />}>
          {/* Routes */}
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
