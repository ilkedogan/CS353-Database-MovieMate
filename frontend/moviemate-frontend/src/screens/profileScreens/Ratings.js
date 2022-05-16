import { Grid } from "@mui/material";
import React from 'react'
import RatingMovieCard from "../../components/RatingMovieCard";
import Constants from "../../utils/Constants";

/**
 * Aslı Dinç
 * 09.05.2022
 * Ratings
 */

export default function Ratings(props) {

    const ratings = [
        {
            id: 3,
            image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
            title: "Fight Club",
            director: "David Fincher",
            productionyear: "1999",
            genre: "Drama",
            rate: "5"
        },
        {
            id: 5,
            image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
            title: "Inception",
            director: "Christopher Nolan",
            productionyear: "2010",
            genre: "Action",
            rate: "4"
        },

    ];
    return <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {ratings.map((m) =>
            <Grid item xs={6} >
                <RatingMovieCard id={m.id} image={m.image} title={m.title} director={m.director}
                    productionyear={m.productionyear} genre={m.genre}
                    rate={m.rate} /></Grid>)}
    </Grid>
}