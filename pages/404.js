const { default: Link } = require("next/link");
import { useEffect } from "react";
import Router from "next/router";
const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>The page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
