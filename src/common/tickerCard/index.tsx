import { FC } from "react";
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
const TickerCard: FC<CardProps> = ({ companyName, name }) => {
  return (
    <div className="CardWrapper">
      <div className="CardContent">
        <div>
          <img src="" loading="lazy" />
        </div>
        <div>{name}</div>
        <p>{companyName}</p>
      </div>
    </div>
  );
};

export default TickerCard;
