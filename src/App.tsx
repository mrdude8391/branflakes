import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";
import About from "./pages/About";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        {/* Layout */}
        <Route element={<MainLayout />}>
          {/* Routes */}
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
