import { useState } from "react";
import { Box, Stack } from "@mui/material";
import TopNav from "../Components/Navbar/TopNav";
import MobDrawerSideBar from "../Components/Navbar/MobDrawerSideBar";
import { Outlet } from "react-router-dom";

function Home() {
  const [mobileOpen, setMobileOpen] = useState(true);

  const openHandel = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <MobDrawerSideBar />
      <Stack spacing={2} sx={{ height: "100vh", p: 2 }}>
        <TopNav openHandel={openHandel} />

        <Stack
          direction="row"
          spacing={2}
          sx={{ flexGrow: 1, maxHeight: "100%", overflowY: "hidden" }}
        >
          <Box
            sx={{
              // m: 3,
              width: { md: "30%", lg: "20%", xl: " 15%" },
              borderRadius: 2,
              bgcolor: "primary.bgColor",
              p: 2,
              maxHeight: "100%",
              overflowY: "auto",
              display: { xs: "none", md: "block" },
            }}
          >
            teeestttt
            {/* <ContentNav /> */}
          </Box>

          <Box
            sx={{
              width: { md: "70%", lg: "80%", xl: " 85%" },
              maxHeight: "100%",
              overflowY: "auto",
            }}
          >
            <Outlet />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
