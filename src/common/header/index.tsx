import { Box } from "@mui/material";
const nasdaqLogo = "./nasdaq-white-1.png";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#191a28",
        width: "100%",
      }}
    >
      <Box paddingY={"1em"} paddingLeft={"1em"}>
        <img src={nasdaqLogo} width={"100px"} />
      </Box>
    </Box>
  );
};

export default Header;
