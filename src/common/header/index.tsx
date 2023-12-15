const nasdaqLogo = "./nasdaq-white-1.png";
import "./styles.scss"

const Header = () => {
  return (
    <div className="headerWrapper">
      <div>
        <img src={nasdaqLogo} />
      </div>
    </div>
  );
};

export default Header;
