import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProTip from "components/ProTip";
import Link from "components/Link";
// import Copyright from "components/Copyright";

export default function About() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          404! Bummer, Page not found.
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go back home
        </Button>
        <ProTip />
      </Box>
    </Container>
  );
}
