import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <div className="container">
        <h1>404 Not Found</h1>
        <h2>{err.data}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
          veniam voluptatibus minima dolor sed dolorum officia deserunt, itaque
          rem, officiis perferendis enim sequi soluta asperiores. Nihil animi in
          porro?
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
