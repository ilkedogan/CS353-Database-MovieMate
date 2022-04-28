import { Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import ReviewMovieCard from "../../components/ReviewMovieCard";

export default function Reviews( props ){
    return <Grid container style={{ display: "flex", justifyContent: "center", color: Constants.WHITE }}>
        <Grid container >
            <Grid item xs={6} >
                <div>
                    <ReviewMovieCard />
                    <ReviewMovieCard />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <ReviewMovieCard />
                    <ReviewMovieCard />
                </div>
            </Grid>
        </Grid>
    </Grid>
}