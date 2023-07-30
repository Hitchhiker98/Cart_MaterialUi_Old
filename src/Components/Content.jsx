import React from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import list from "./constants";
function Content() {
  const getCoffeMakerCard = (coffeMakerObj, inx) => {
    return (
      <Grid key={inx} item xs={12} sm={4}>
        <Card {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <div>
      <Grid container spacing={2}>
        {list.map((card, inx) => {
          return getCoffeMakerCard(card, inx);
        })}
      </Grid>
    </div>
  );
}

export default Content;
