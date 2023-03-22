import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getlist } from "./Reducertoool";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid, Container, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Cards.css";
import { addToCart } from "./Addtocarttool";

export default function Countertool() {
  const datas = useSelector((y) => y.post1);
  const mydis = useDispatch();

  const addddTO1 = useSelector((p) => p.ADD1);
  const addiss1 = useDispatch();
  console.log(addddTO1);

  useEffect(() => {
    mydis(getlist());
  }, []);
  
  return (
    <Grid container spacing={3} className="mt-4 mb-5">
      {datas?.data.map((val, index) => {
        return (
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 345, height: 480 }} id="cards">
              <CardMedia
                sx={{ height: 300 }}
                image={val.image}
                title={val.title}
              />
              <CardContent>
                <Typography noWrap gutterBottom variant="h5" component="div">
                  {val.title}
                </Typography>
                <Typography
                  noWrap
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {val.description}
                </Typography>
              </CardContent>
    
              <CardActions>

                <button className="btn btn-outline-primary">Buy Now</button>
                <button className="btn btn-outline-primary" onClick={()=> {
                   addiss1(addToCart(val))
                }}>Add To Cart
                <ShoppingCartIcon/>
                </button>

              </CardActions>

            </Card>
          </Grid>
        );
      })}
  </Grid>
 );}


