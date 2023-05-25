import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export const MyCard = ({ id, title, description, image, price }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const isExistItem = basket.some((item) => item.id === id);

  const handleAddToBasket = () => {
    dispatch({ type: "ADD_TO_BASKET", payload: { id, title, description, image, price } });
  };

  const handleRemoveFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: 150, objectFit: "contain" }}
        image={image}
        title="green iguana"
      />
      <CardContent
        sx={{ minHeight: 170, maxHeight: 170, boxSizing: "border-box" }}
      >
        <Typography gutterBottom variant="h6" component="div" lineHeight={1}>
          {title.length > 35 ? title.substring(0, 35) + " ..." : title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 90
            ? description.substring(1, 90) + " ..."
            : description}
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="#eb4034">
          {price}$
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          onClick={isExistItem ? handleRemoveFromBasket : handleAddToBasket}
          sx={
            isExistItem
              ? {
                  backgroundColor: "#eb4034",
                  color: "white",
                  ":hover": {
                    bgcolor: "#D3310D",
                    color: "white",
                  },
                }
              : {
                  backgroundColor: "#1976d2",
                  color: "white",
                  ":hover": {
                    bgcolor: "#054BB0",
                    color: "white",
                  },
                }
          }
          size="small"
        >
          {isExistItem ? "Sepetten Çıkar" : "Sepete Ekle"}
        </Button>
      </CardActions>
    </Card>
  );
};
