import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import Item from "./Item";

interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

interface Album {
  id: string;
  href: string;
  images: Image[];
  name: string;
  external_urls: {
    spotify: string;
  };
}

const NewReleases = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get("/browse/new-releases?country=IN&limit=50", {
        signal: controller.signal,
      })
      .then((res) => {
        setAlbums(res.data.albums.items);
        console.log(res.data);
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
        New releases
      </Typography>

      <GridContainer>
        {albums.map(({ id, name, images }: Album) => (
          <Item key={id}>
            <Image
              src={images.length >= 2 ? images[1].url : images[0].url}
              alt={name}
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL={images[0].url}
            />
            <Typography>{name}</Typography>
          </Item>
        ))}
      </GridContainer>
    </Box>
  );
};

export default NewReleases;
