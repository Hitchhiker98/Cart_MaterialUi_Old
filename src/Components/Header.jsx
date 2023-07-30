import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: 1 }}>This is our header</Typography>
        <ShareIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
