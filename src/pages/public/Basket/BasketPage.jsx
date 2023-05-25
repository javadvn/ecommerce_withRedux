import { useSelector, useDispatch } from "react-redux";
import { Alert, CardMedia, Grid, Button, Typography } from "@mui/material";
import { Layout } from "../../../components/Layout";

export const BasketPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const isExistItem = (itemId) => items.some((item) => item.id === itemId);

  const handleAddToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  const handleRemoveFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: itemId });
  };

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Layout>
      <Grid container>
      <Grid item>
        {items.length < 1 && (
          <Alert severity="error">You have not any items in your basket </Alert>
        )}
        {items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} - {item.price}$
                <CardMedia
                  component="img"
                  sx={{ height: 150, width: 150, objectFit: "contain" }}
                  image={item.image}
                  title="green iguana"
                />
                <Button
                  onClick={() =>
                    isExistItem(item.id)
                      ? handleRemoveFromBasket(item.id)
                      : handleAddToBasket(item)
                  }
                  sx={
                    isExistItem(item.id)
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
                  {isExistItem(item.id)
                    ? "Remove from basket"
                    : "Add to basket"}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Grid>
      <Grid item marginTop={10}>
        {items.length > 0 && (
          <Typography
            fontSize={22}
            gutterBottom
            variant="h6"
            component="div"
            lineHeight={1}
          >
            Total: {total}$
          </Typography>
        )}
      </Grid></Grid>
    </Layout>
  );
};
