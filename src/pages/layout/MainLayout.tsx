import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <div id="layout-outlet">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
