import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "components/SideBar";
import TopAppBar from "components/TopAppBar";
import BaseLayout from "./base";
import BottomPlayer from "components/BottomPlayer";

export default function MainLayout({ children }: any) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <BaseLayout>
      <Box sx={{ display: "flex" }}>
        <TopAppBar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
      <BottomPlayer />
    </BaseLayout>
  );
}
