import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gridGap: theme.spacing(2),
}));

export default GridContainer;
