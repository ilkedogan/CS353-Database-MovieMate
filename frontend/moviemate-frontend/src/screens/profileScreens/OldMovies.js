import { Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import OldMovieCard from "../../components/OldMovieCard";
import MovieCard from "../../components/MovieCard";

/**
 * Aslı Dinç
 * 09.05.2022
 * OldMovies
 */
export default function OldMovies( props ) {

    const oldMovies = [
        {
            id: 1,
            image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            title: "Spider-Man: No Way Home",
            director: "Jon Watts",
            productionyear: "2021",
            genre: "Action",
            price: "$3.99",
            expdate: "12.05.2022"
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            productionyear: "1994",
            genre: "Drama",
            price: "$3.99",
            expdate: "13.05.2022"
        },
    ];


    return <Grid container style={ { display: "flex", justifyContent: "center" } }>
        { oldMovies.map( ( m ) =>
            <Grid  item xs={ 6 } >
                <OldMovieCard id={ m.id } image={ m.image } title={ m.title } director={ m.director }
                              productionyear={ m.productionyear } genre={ m.genre } price={ m.price }
                              expdate={ m.expdate }/>
            </Grid> )
        }
    </Grid>
}