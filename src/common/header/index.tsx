import "./styles.scss"

const nasdaqLogo = "./nasdaq-white-1.png";


const Header = () => {
  return (
    <div className="headerWrapper">
      <div>
        <img src={nasdaqLogo} width={100} height={30} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
