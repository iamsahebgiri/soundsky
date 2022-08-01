import { Box } from "@mui/material";
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
import { getAverageRGB } from "utils/colors";
import { Playlist, Track } from "utils/types";
import { useStore } from "store";

export default function CategoryPage() {
  const [playlist, setPlaylist] = useState<Playlist>();
  const [playlistCoverColor, setPlaylistCoverColor] =
    useState<string>("#1e293b");
  const [tracks, setTracks] = useState<Track[]>([]);
  const [items, setItems] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const setCurrentSong = useStore((state) => state.setCurrentSong);

  const playlistId = router.query.id;

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    if (playlistId) {
      axios
        .get(`/playlists/${playlistId}?country=IN&limit=50`, {
          signal: controller.signal,
        })
        .then((res) => {
          setItems(res.data.tracks.items);
          let tracks: Track[] = [];
          res.data.tracks.items.map((item: any) => {
            if (item.track.preview_url) {
              let track: Track = {
                type: "track",
                id: item.track.id,
                href: item.href,
                images: item.track.album.images,
                preview_url: item.track.preview_url,
                name: item.track.name,
                popularity: item.track.popularity,
                external_urls: item.track.external_urls,
              };
              tracks.push(track);
            }
          });
          setTracks(tracks);
          setPlaylist(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => controller.abort();
  }, [playlistId]);

  if (loading) {
    return (
      <MainLayout>
        <Container maxWidth="xl">
          <LoadingSkeleton />
        </Container>
      </MainLayout>
    );
  }

  const handlePlaylistBackground = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    if (e.target) {
      setPlaylistCoverColor(getAverageRGB(e.target));
    }
  };

  const handleOnClickSong = (song: Track) => {
    setCurrentSong(song);
  };

  return (
    <MainLayout>
      <Container maxWidth="xl">
        {playlist && (
          <Box
            sx={{
              background:
                playlist.primary_color !== null &&
                playlist.primary_color.toLowerCase() !== "#ffffff"
                  ? `linear-gradient(to bottom, #eef2ff00 0%, ${playlist.primary_color} 100%)`
                  : `linear-gradient(to bottom, ${playlistCoverColor}80 0%, ${playlistCoverColor} 100%)`,
              p: 3,
              borderRadius: "0.5rem",
              img: {
                borderRadius: "0.4rem",
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
              mb: "2rem",
            }}
          >
            <Image
              src={playlist.images[0].url}
              alt={playlist.name}
              width={200}
              height={200}
              onLoad={handlePlaylistBackground}
            />
            <Typography
              sx={{
                pt: "1rem",
                fontSize: "1.6rem",
                fontWeight: "600",
                color: "white",
              }}
            >
              {playlist?.name}
            </Typography>
            <Typography
              sx={{
                color: "#cbd5e1",
              }}
            >
              {playlist?.description}
            </Typography>
          </Box>
        )}

        <GridContainer>
          {tracks.map((track) => {
            const { id, name, images, preview_url } = track;
            if (preview_url) {
              return (
                <Box key={id} onClick={() => handleOnClickSong(track)}>
                  <Item>
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
                </Box>
              );
            }
          })}
        </GridContainer>
      </Container>
    </MainLayout>
  );
}
