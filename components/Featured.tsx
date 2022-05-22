import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import Item from "./Item";
import LoadingSkeleton from "./LoadingSkeleton";

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

const Featured = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    axios
      .get("/browse/featured-playlists?country=IN&limit=50", {
        signal: controller.signal,
      })
      .then((res) => {
        setAlbums(res.data.playlists.items);
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
        Featured playlists
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

export default Featured;
