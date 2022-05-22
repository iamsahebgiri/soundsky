import beach24Regular from "@iconify/icons-fluent/beach-24-regular";
import dumbbell24Regular from "@iconify/icons-fluent/dumbbell-24-regular";
import folder24Regular from "@iconify/icons-fluent/folder-24-regular";
import heart24Regular from "@iconify/icons-fluent/heart-24-regular";
import home24Regular from "@iconify/icons-fluent/home-24-regular";
import trophy24Regular from "@iconify/icons-fluent/trophy-24-regular";

const libraries = [
  {
    title: "Home",
    href: "/",
    icon: home24Regular,
  },
  {
    title: "Top",
    href: "/category/toplists",
    icon: trophy24Regular,
  },
  {
    title: "Mood",
    href: "/category/mood",
    icon: heart24Regular,
  },
  {
    title: "Chill",
    href: "/category/chill",
    icon: beach24Regular,
  },
  {
    title: "Workout",
    href: "/category/workout",
    icon: dumbbell24Regular,
  },
];

const playlists = [
  {
    title: "Rock",
    href: "/category/rock",
    icon: folder24Regular,
  },
  {
    title: "Party",
    href: "/category/party",
    icon: folder24Regular,
  },

  {
    title: "EDM",
    href: "/category/edm_dance",
    icon: folder24Regular,
  },
  {
    title: "Hip-Hop",
    href: "/category/hiphop",
    icon: folder24Regular,
  },

  {
    title: "Summer",
    href: "/category/summer",
    icon: folder24Regular,
  },
  {
    title: "country",
    href: "/category/country",
    icon: folder24Regular,
  },
];

const getCategoryName = (href: string) => {
  libraries.forEach((library) => {
    if (library.href == href) {
      return library.title;
    }
  });

  playlists.forEach((playlist) => {
    if (playlist.href == href) {
      return playlist.title;
    }
  });

  return null;
};

export { libraries, playlists, getCategoryName };
