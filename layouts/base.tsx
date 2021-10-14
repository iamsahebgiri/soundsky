import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ProgressBar = dynamic(() => import("../components/ProgressBar"), {
  ssr: false,
});

export default function BaseLayout(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Home",
    description: `Download ringtones and play music online`,
    image: "https://iamsahebgiri.vercel.app/assets/banner.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{`${meta.title} - SoundSky`}</title>
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
        <meta property="og:title" content={`${meta.title} - SoundSky`} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iamsahebgiri" />
        <meta name="twitter:title" content={`${meta.title} - SoundSky`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <ProgressBar />
      <div>{children}</div>
    </div>
  );
}
