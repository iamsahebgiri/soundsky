import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Category } from "utils/types";
import GridContainer from "./GridContainer";
import Item from "./Item";
import LoadingSkeleton from "./LoadingSkeleton";

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
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

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
        {categories.map(({ id, name, icons }: Category) => (
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
