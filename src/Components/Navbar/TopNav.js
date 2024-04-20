import {Stack, IconButton ,Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuNav from "../Navbar/MenuNav";
import { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useLocation } from "react-router-dom";




const TopNav = (props) => {
  let location = useLocation();
  const [name, ] = useState(<PersonOutlineIcon />);
  const [route, setRoute] = useState("");


  useEffect(() => {
    const newRoute = location.pathname.slice(1).split("/")[1]?.replaceAll("-" ,"");

    if (newRoute) {
      setRoute(
   `sideNav_${newRoute}`
      );
    } else {
      setRoute("sideNav_platform");
    }

  }, [location.pathname]);



  return (
   
      <Stack  alignItems="center" direction="row"  sx={{bgcolor : "primary.bgColor" ,    borderRadius: 2,px: 2}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.openHandel}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textTransform: "capitalize" }}
          component="h6"
        >
          {route}
        </Typography>
        <MenuNav name={name} />
      </Stack>
   
  );
};

export default TopNav;
