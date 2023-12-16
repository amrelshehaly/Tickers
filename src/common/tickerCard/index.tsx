import "./styles.scss";

type CardProps = {
  name: string;
  companyName: string;
};

/**
 *
 * @param { companyName } string - Company name
 * @param { name } string - Ticker name
 * @param { image } string - place ticker image, if found
 */
const TickerCard = ({ companyName, name }: CardProps) => {
  return (
    <div className="CardWrapper">
      <div className="CardContent">
        <div id="title">{name}</div>
        <div id="subTitle">{companyName}</div>
      </div>
    </div>
  );
};

export default TickerCard;
