import { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import TopNav from "../Components/Navbar/TopNav";
import SideNav from "../Components/Navbar/SideNav";
import { Outlet } from "react-router-dom";

function Home() {
  const [mobileOpen, setMobileOpen] = useState(true);

  const openHandel = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Stack sx={{ height: "100vh", padding: "20px 40px", background: "blue" }}>
      <div> toooooop </div>
      {/* <TopNav openHandel={openHandel} drawerWidth={drawerWidth} /> */}

      {/* <SideNav openHandel={openHandel} mobileOpen={mobileOpen} /> */}

      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid
          item
          xs={0}
          md={4}
          lg={3}
          xl={2}
          sx={{
            // m: 3,
            borderRadius: "10px",
            background: "green",
            display: { xs: "none", md: "block" },
          }}
        >
          teeestttt
          {/* <ContentNav /> */}
        </Grid>

        <Grid item xs={12} md={8} lg={9} xl={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Home;
