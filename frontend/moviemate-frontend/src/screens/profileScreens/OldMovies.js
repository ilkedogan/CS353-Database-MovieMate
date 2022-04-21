import { Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import OldMovieCards from "../../components/OldMovieCards";
export default function RentedMovies( props ){
    return <Grid container style={{display:"flex", justifyContent:"center", color: Constants.WHITE}}>
            <OldMovieCards/>
    </Grid>
}