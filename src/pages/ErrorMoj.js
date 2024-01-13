import { Link } from "react-router-dom";

function ErrorMoj() {
  return (
    <Link
      to={"/"}
      className="my-20 bg-warning
    mx-20"
    >
      Nottttttt Found- my Custom 404
      <button className="block mx-auto my-20 bg-success">Back to home</button>
    </Link>
  );
}

export default ErrorMoj;
