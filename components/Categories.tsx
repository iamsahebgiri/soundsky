import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import Item from "./Item";

interface Icon {
  height: number | null;
  url: string;
  width: number | null;
}

interface Category {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get("/browse/categories?country=IN&limit=50", {
        signal: controller.signal,
      })
      .then((res) => {
        setCategories(res.data.categories.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const LoadingSkeleton = () => {
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
          {Array.from({ length: 6 }).map((_, i) => (
            <Box key={i}>
              <Skeleton height="160px" variant="rectangular" />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          ))}
        </GridContainer>
      </Box>
    );
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <Box>
      <Typography
        sx={{
          pb: "2rem",
          fontSize: "1.6rem",
          fontWeight: "600",
        }}
      >
        Categories
      </Typography>

      <GridContainer>
        {categories.map(({ id, name, icons }: Category, i) => (
          <Item key={id}>
            <Image
              src={icons[0].url}
              alt={name}
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL={icons[0].url}
            />
            <Typography>{name}</Typography>
          </Item>
        ))}
      </GridContainer>
    </Box>
  );
};

export default Categories;