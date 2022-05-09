import { Grid } from "@mui/material";
import React from 'react'
import RatingMovieCard from "../../components/RatingMovieCard";
import Constants from "../../utils/Constants";

export default function Ratings(props) {
    return <Grid container style={{ display: "flex", justifyContent: "center", color: Constants.WHITE }}>
        <Grid container >
            <Grid item xs={6} >
                <div>
                    <RatingMovieCard />
                    <RatingMovieCard />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <RatingMovieCard />
                    <RatingMovieCard />
                </div>
            </Grid>
        </Grid>
    </Grid>
}