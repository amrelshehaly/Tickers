import { FC } from "react";
import { Typography, CardContent } from "@mui/material";
import { CardWarpper } from "./styles";

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
    <CardWarpper>
      <CardContent sx={{ cursor: "pointer" }} className="ticker">
        <Typography component={'div'}>
          <img src="" loading="lazy" />
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{companyName}</Typography>
      </CardContent>
    </CardWarpper>
  );
};

export default TickerCard;
