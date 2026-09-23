import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import Nav from "../../components/Nav";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <div id="layout-outlet">
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
