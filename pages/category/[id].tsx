import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import GridContainer from "components/GridContainer";
import Item from "components/Item";
import LoadingSkeleton from "components/LoadingSkeleton";
import MainLayout from "layouts/main";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Playlist } from "utils/types";

export default function CategoryPage() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const categoryId = router.query.id;

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    if (categoryId) {
      axios
        .get(
          `/browse/categories/${categoryId}/playlists?country=IN&limit=50`,
          {
            signal: controller.signal,
          }
        )
        .then((res) => {
          setPlaylists(res.data.playlists.items);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => controller.abort();
  }, [categoryId]);

  if (loading) {
    return (
      <MainLayout>
        <Container maxWidth="xl">
          <LoadingSkeleton />
        </Container>
      </MainLayout>
    );
    }

  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Typography
          sx={{
            pb: "2rem",
            fontSize: "1.6rem",
            fontWeight: "600",
          }}
        >
          {!loading && categoryId[0]?.toUpperCase() + categoryId?.slice(1)}
        </Typography>
        <GridContainer>
          {playlists.map(({ id, name, images }: Playlist, i) => (
            <Item key={id} href={`/playlist/${id}`}>
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
      </Container>
    </MainLayout>
  );
}
