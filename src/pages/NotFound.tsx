import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-lvh flexCenter">
      <h1>Error 404 Page Not Found ❌</h1>
      <Link to="/">
        <button className="mt-4">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
