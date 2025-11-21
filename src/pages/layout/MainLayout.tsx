import Nav from "../../components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
