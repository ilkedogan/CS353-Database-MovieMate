import { Grid } from "@mui/material";
import React from 'react'
import RatingMovieCard from "../../components/RatingMovieCard";
import Constants from "../../utils/Constants";

/**
 * Aslı Dinç
 * 09.05.2022
 * Ratings
 */

export default function Ratings( props ) {
    const [ ratedMovies, setRatedMovies ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetch, setDataFetch ] = React.useState( false )
    const [ error, setError ] = React.useState( false )

    if ( !dataFetch ) {
        setDataFetch( true )
        setLoading( true )
        getRatedMovies()
            .then( () => setLoading( false ) )
    }

    async function getRatedMovies() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "customer/ratedMovies?customerId=" + props.userData.id

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setRatedMovies( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )


    }

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
    return <Grid container style={ { display: "flex", justifyContent: "start" } }>
        { ratedMovies.map( ( m ) =>
            <Grid item xs={ 6 }>
                <RatingMovieCard
                    setCurrentPage={ ( val ) => props.setCurrentPage( val ) }
                    setMovieId={ ( val ) => props.setMovieId( val ) }
                    id={ m.id } image={ m.image } title={ m.title }
                    productionYear={ m.productionYear }
                    rate={ m.rate }/></Grid> ) }
    </Grid>
}