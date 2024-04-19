import Drawer from "@mui/material/Drawer";
import ContentNav from "./ContentNav";

const MobDrawerSideBar = (props) => {

  return (
 
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={props.mobileOpen}
        onClose={props.openHandel}
        ModalProps={{
          keepMounted: true,
        }}
    
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <ContentNav mob  openHandel={props.openHandel}/>
      </Drawer>

    
  
  );
};

export default MobDrawerSideBar  ;
