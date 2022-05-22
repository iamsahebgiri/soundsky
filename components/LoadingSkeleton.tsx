import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import GridContainer from "components/GridContainer";
import React from "react";

export default function LoadingSkeleton({ n = 6 }) {
  return (
    <Box>
      <Skeleton
        height={64}
        sx={{
          mb: 2,
          width: {
            xs: "100%",
            sm: "40%",
          },
        }}
      />
      <GridContainer>
        {Array.from({ length: n }).map((_, i) => (
          <Box key={i}>
            <Skeleton
              height="160px"
              variant="rectangular"
              sx={{ borderRadius: "0.5rem" }}
            />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </GridContainer>
    </Box>
  );
}
