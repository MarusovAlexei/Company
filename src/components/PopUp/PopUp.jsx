import "./PopUp.scss";
import logoBlackTheme from "./../../assets/image/header/logoWhite.svg";
import logoWhiteTheme from "./../../assets/image/header/logoBlack.svg";
import Logo from "../Header/Logo/Logo";

const PopUp = ({ active, setActive }) => {
  return (
    <div
      className={active ? "popup active" : "popup"}
      onClick={() => setActive(false)}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <Logo />
        <form className="popup__form" method="post" action="#">
          <input
            className="block"
            type="text"
            id="username"
            placeholder="Name"
          />
          <input
            className="block"
            type="text"
            id="usermail"
            placeholder="Mail"
          />
          <input
            className="block"
            type="tel"
            id="usertel"
            placeholder="Telephone"
          />
          <textarea
            className="block"
            type="text"
            id="usermessage"
            placeholder="Message"
            rows={5}
          />
        </form>
        {/*  <div className="popup__privacy">
          I agree with the
          <a href="https://osobnyaki.com/privacy" target="_blank">
            {" "}
            privacy policy
          </a>
          <input type="checkbox" />
        </div> */}
        <div className="popup__content-btns">
          <button
            className="popup__btn-send"
            onClick={() => {
              alert("отправлено на почту");
              setActive(false);
            }}
          >
            send
          </button>
          <button className="popup__btn-close" onClick={() => setActive(false)}>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
