import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import DarkModeButton from "components/DarkModeButton";

const ProgressBar = dynamic(() => import("../components/ProgressBar"), {
  ssr: false,
});

export default function BaseLayout(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "SoundSky",
    description: `Download ringtones and play music online`,
    image: "https://iamsahebgiri.vercel.app/assets/banner.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <Box>
      <Head>
        <title>{`${meta.title} / SoundSky`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://soundsky.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://soundsky.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="SoundSky" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={`${meta.title} / SoundSky`} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iamsahebgiri" />
        <meta name="twitter:title" content={`${meta.title} / SoundSky`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <ProgressBar />
      <DarkModeButton />
      <Box py={16} minH="100vh">
        {children}
      </Box>
    </Box>
  );
}
