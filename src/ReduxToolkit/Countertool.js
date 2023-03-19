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



  const Countertool = () => {

    const data = useSelector(y => y.post1)
    const mydis = useDispatch()

    console.log(data);

    useEffect(() => {
        mydis(getlist())
    }, []);

    return (
        <div>
            {data?.data.map((val, index) => {
                return (
                    <div className='text-center col-4 ' id='rajan' key={index}>
                        <div className="card  m-3 " >
                            <div className="card-body ">
                                <h1>{val.category}</h1>
                                <h5 className="card-title">{val.title}</h5>
                                <h5 className="card-title">{val.price}</h5>
                                <p className="card-text">{val.description}</p>
                                {/* <p ></p> */}
                                <img src={val.image} className='w-50 mx-auto' alt="" />
                                <div>
                                    <p >{val.rating.rate}</p>
                                </div>
                                <a href="#" className="btn btn-outline-primary mx-1">Buy Now</a>
                                <a href="#" className="btn btn-outline-primary mx-1">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}



export default Countertool ;




