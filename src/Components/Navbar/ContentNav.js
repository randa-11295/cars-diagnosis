import Toolbar from "@mui/material/Toolbar";


import { useNavigate, useLocation } from "react-router-dom";
import {Box , List ,ListItem ,ListItemButton ,  ListItemIcon , ListItemText} from "@mui/material";


const openInNewTab = () => {

  window.open("", "_blank", "noopener,noreferrer");
};

const ContentNav = (props) => {
  let location = useLocation();



  const changeRouteHandel = (url) => {
    props.mob && props.openHandel();
    switch (url) {
      case "main":
        openInNewTab();
        break;
      case false:
        
        break;
      default:
       
    }
  };

  const isSelectedCheck = (url, path) =>
    url === path.replaceAll("/" , "") ||
    (path.replaceAll("/" , "") === "/" && url === "");


  const listStyle = (url, path) => {
    return {
      background: isSelectedCheck(url, path) ? "white" : "inherit",
      color: isSelectedCheck(url, path) ? "secondary.main" : "inherit",
    };
  };

  const iconStyle = (url, path) => ({
    color: isSelectedCheck(url, path) ? "secondary.main" : "white",
  });

  return (
    <Box sx={boxStyle}>
      <Toolbar sx={logoStyle} onClick={() => changeRouteHandel("")}></Toolbar>

      <List sx={{ pt: "1px" }}>
        {["test"].map((el) => (
          <ListItem
            sx={listStyle(el.url, location.pathname)}
            key={el.url}
            disablePadding
            onClick={() => {
              changeRouteHandel(el.url);
            }}
          >
            <ListItemButton
              sx={{ justifyContent: "space-between", display: "flex" }}
            >
              <ListItemText
                primary={el.text}
                sx={{ textAlign: "start" }}
              />
              <ListItemIcon sx={iconStyle(el.url, location.pathname)}>
                {el.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContentNav;

const logoStyle = {
  backgroundImage: `url("logo.png")`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "#fff",
  cursor: "pointer",
};

const boxStyle = {
  bgcolor: "secondary.main",
  color: "#fff",
  height: "100vh",
  overflow: "auto",
};
