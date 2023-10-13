import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>

      <p>
        Go back to
        <Link to="/" replace>
          Home
        </Link>
      </p>
    </>
  );
};

export default NoMatch;
