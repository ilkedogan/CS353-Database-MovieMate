import { Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import OldMovieCard from "../../components/OldMovieCard";
import MovieCard from "../../components/MovieCard";

export default function OldMovies(props) {
    return <Grid container style={{ display: "flex", justifyContent: "center", color: Constants.WHITE }}>
        <Grid container >
            <Grid item xs={6} >
                <div>
                    <OldMovieCard/>
                    <OldMovieCard />
                </div>
            </Grid>
            <Grid item xs={6} >
                <div>
                    <OldMovieCard />
                    <OldMovieCard />
                </div>
            </Grid>
        </Grid>
    </Grid>
}