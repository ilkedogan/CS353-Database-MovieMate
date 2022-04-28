import { Grid } from "@mui/material";
import React from 'react'
import RentedMovieCard from "../../components/RentedMovieCard";
import Constants from "../../utils/Constants";

export default function RentedMovies(props) {
    return <Grid container style={{ display: "flex", justifyContent: "center", color: Constants.WHITE }}>
        <Grid container >
            <Grid item xs={6} >
                <div>
                    <RentedMovieCard />
                    <RentedMovieCard />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <RentedMovieCard />
                    <RentedMovieCard />
                </div>
            </Grid>
        </Grid>
    </Grid>
}