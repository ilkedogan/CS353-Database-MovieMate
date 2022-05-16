import { Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import ReviewMovieCard from "../../components/ReviewMovieCard";

/**
 * Aslı Dinç
 * 09.05.2022
 * Reviews
 */
export default function Reviews( props ){

    const [ reviewedMovies, setReviewedMovies ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetch, setDataFetch ] = React.useState( false )
    const [ error, setError ] = React.useState( false )

    if ( !dataFetch ) {
        setDataFetch( true )
        setLoading( true )
        getReviewedMovies()
            .then( () => setLoading( false ) )
    }

    async function getReviewedMovies() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "customer/reviewedMovies?customerId=" + props.userData.id

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setReviewedMovies( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )


    }

    return <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {reviewedMovies.map((m) =>
            <Grid item xs={6} >
                <ReviewMovieCard id={m.id} image={m.image} title={m.title} director={m.director}
                    productionYear={m.productionYear}
                    review={m.review} /></Grid>)}
    </Grid>
}