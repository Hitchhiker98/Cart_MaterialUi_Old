import React from "react";

const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100vh",
    backgroundColor: "#253053",
  },
};

const SideMenu = (props) => {
  console.log(props);
  const { classes } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width: "320px",
        height: "100vh",
        backgroundColor: "#253053",
      }}
    ></div>
  );
};

export default SideMenu;
