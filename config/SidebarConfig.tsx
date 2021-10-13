import * as React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import browserSafari from "@iconify/icons-icon-park-outline/browser-safari";
import trendingUp from "@iconify/icons-icon-park-outline/trending-up";
import gamePs from "@iconify/icons-icon-park-outline/game-ps";
import ovalLoveTwo from "@iconify/icons-icon-park-outline/oval-love-two";
import sippyCup from "@iconify/icons-icon-park-outline/sippy-cup";
import autoFocus from "@iconify/icons-icon-park-outline/auto-focus";
import dumbbell from "@iconify/icons-icon-park-outline/dumbbell";

const getIcon = (name: IconifyIcon) => (
  <Icon icon={name} width={21} height={21} />
);

const sidebarConfig = [
  {
    title: "Top",
    href: "/category/top",
    icon: getIcon(browserSafari),
  },
  {
    title: "Trendings",
    href: "/category/trendings",
    icon: getIcon(trendingUp),
  },
  {
    title: "Gaming",
    href: "/category/gaming",
    icon: getIcon(gamePs),
  },
  {
    title: "Mood",
    href: "/category/mood",
    icon: getIcon(ovalLoveTwo),
  },
  {
    title: "Chill",
    href: "/category/chill",
    icon: getIcon(sippyCup),
  },
  {
    title: "Focus",
    href: "/category/focus",
    icon: getIcon(autoFocus),
  },
  {
    title: "Workout",
    href: "/category/workout",
    icon: getIcon(dumbbell),
  },
];

export default sidebarConfig;
