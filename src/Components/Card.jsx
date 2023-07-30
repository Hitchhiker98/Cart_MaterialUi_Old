import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

function coffeCard(props) {
  const bull = (
    <span
      style={{
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      }}
    >
      •
    </span>
  );
  const { avatarUrl, title, price, description, imageUrl } = props;
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia
        style={{ height: "250px" }}
        image={imageUrl}
        title="Card Media"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
}

export default coffeCard;
