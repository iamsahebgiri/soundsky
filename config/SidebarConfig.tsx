import home24Regular from "@iconify/icons-fluent/home-24-regular";
import dumbbell24Regular from "@iconify/icons-fluent/dumbbell-24-regular";
import heart24Regular from "@iconify/icons-fluent/heart-24-regular";
import arrowTrending24Regular from "@iconify/icons-fluent/arrow-trending-24-regular";
import games24Regular from "@iconify/icons-fluent/games-24-regular";
import beach24Regular from "@iconify/icons-fluent/beach-24-regular";
import trophy24Regular from "@iconify/icons-fluent/trophy-24-regular";
import foodGrains24Regular from "@iconify/icons-fluent/food-grains-24-regular";
import folder24Regular from "@iconify/icons-fluent/folder-24-regular";

const libraries = [
  {
    title: "Home",
    href: "/",
    icon: home24Regular,
  },
  {
    title: "Top",
    href: "/category/top",
    icon: trophy24Regular,
  },
  {
    title: "Trendings",
    href: "/category/trendings",
    icon: arrowTrending24Regular,
  },
  {
    title: "Gaming",
    href: "/category/gaming",
    icon: games24Regular,
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
    title: "Focus",
    href: "/category/focus",
    icon: foodGrains24Regular,
  },
  {
    title: "Workout",
    href: "/category/workout",
    icon: dumbbell24Regular,
  },
];

const playlists = [
  {
    title: "Classical",
    href: "/category/classical",
    icon: folder24Regular,
  },
  {
    title: "Bollywood",
    href: "/category/bollywood",
    icon: folder24Regular,
  },
  {
    title: "Party",
    href: "/category/party",
    icon: folder24Regular,
  },
  {
    title: "Punjabi",
    href: "/category/punjabi",
    icon: folder24Regular,
  },
  {
    title: "Telugu",
    href: "/category/telugu",
    icon: folder24Regular,
  },
];

export { libraries, playlists };
