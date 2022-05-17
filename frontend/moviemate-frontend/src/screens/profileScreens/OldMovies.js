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
    const [ oldMovies, setOldMovies ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetch, setDataFetch ] = React.useState( false )
    const [ error, setError ] = React.useState( false )

    if ( !dataFetch ) {
        setDataFetch( true )
        setLoading( true )
        getOldMovies()
            .then( () => setLoading( false ) )
    }

    async function getOldMovies() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "customer/rentedOldMovies?customerId=" + props.userData.id

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setOldMovies( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }


    return <Grid container style={ { display: "flex", justifyContent: "start" } }>
        { oldMovies.map( ( m ) =>
            <Grid item xs={ 6 }>
                <OldMovieCard
                    setCurrentPage={ ( val ) => props.setCurrentPage( val ) }
                    setMovieId={ ( val ) => props.setMovieId( val ) }
                    id={ m.id } image={ m.image } title={ m.title } director={ m.director }
                    productionYear={ m.productionYear } price={ m.price }
                    day={ m.day } rentDate={ m.rentDate }/>
            </Grid> )
        }
    </Grid>
}