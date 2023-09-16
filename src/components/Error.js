import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div
      className="error"
      style={{
        position: "absolute",
        left: "20%",
        top: "20%",
        textAlign: "left",
      }}
    >
      <h1>
        OOPS!!! <br />
        Somthing went wrong
      </h1>
      <h2>
        {error.status}: Page {error.statusText}
      </h2>
      <p>{error.error.message}</p>
    </div>
  );
}

export default Error;
