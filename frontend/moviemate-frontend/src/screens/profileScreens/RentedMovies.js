import { Grid } from "@mui/material";
import RentedMovieCard from "../../components/RentedMovieCard";
import React from 'react'

/**
 * Aslı Dinç & Hacı Çakın
 * 09.05.2022
 * RentedMovies
 */
export default function RentedMovies( props ) {
    const [ rentedMovies, setRentedMovies ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetch, setDataFetch ] = React.useState( false )
    const [ error, setError ] = React.useState( false )

    if ( !dataFetch ) {
        setDataFetch( true )
        setLoading( true )
        getRentedMovies()
            .then( () => setLoading( false ) )
    }

    async function getRentedMovies() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "customer/rentedActiveMovies?customerId=" + props.userData.id

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setRentedMovies( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )


    }

    return <Grid container style={ { display: "flex", justifyContent: "center" } }>
        { rentedMovies.map( ( m ) =>
            <Grid item xs={ 6 }>
                <RentedMovieCard id={ m.id } image={ m.image } title={ m.title }
                                 productionYear={ m.productionYear }
                                 price={ m.price }
                                 day={ m.day }
                                 rentDate={ m.rentDate }/></Grid> ) }
    </Grid>

}