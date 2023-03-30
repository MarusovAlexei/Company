import "./ErrorPage.scss";
import errorImg from "./../../assets/image/errorPage/errorPage.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2 className="error-page__header">ERROR 404</h2>
      <div className="err-page__img">
        <img src={errorImg} alt="err" />
      </div>
      <Link to="/">back to main page</Link>
    </div>
  );
};

export default ErrorPage;
