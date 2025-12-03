import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  const currentLocation = "/" + location.pathname.split("/")[1];

  const navButtonBehavior = (href: string) =>
    currentLocation == href ? "nav-button-current" : "nav-button  ";

  return (
    <>
      <nav>
        <div className="flex items-center h-full justify-center gap-12 ">
          <Link to="/" className={navButtonBehavior("/")} viewTransition>
            Work
          </Link>
          <Link
            to="/about"
            className={navButtonBehavior("/about")}
            viewTransition
          >
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
