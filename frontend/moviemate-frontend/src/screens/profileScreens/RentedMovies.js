import { Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import RentedMovieCards from "../../components/RentedMovieCards";
export default function RentedMovies( props ){
    return <Grid container style={{display:"flex", justifyContent:"center", color: Constants.WHITE}}>
            <RentedMovieCards/>
    </Grid>
}