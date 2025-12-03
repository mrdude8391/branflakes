import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

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
