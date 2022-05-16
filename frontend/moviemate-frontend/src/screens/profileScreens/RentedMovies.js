import { Grid } from "@mui/material";
import RentedMovieCard from "../../components/RentedMovieCard";
import React from 'react'

/**
 * Aslı Dinç
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

    const rentedMoviesTemp = [
        {
            id: 3,
            image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
            title: "Fight Club",
            director: "David Fincher",
            productionyear: "1999",
            genre: "Drama",
            price: "$3.99",
            duedate: "17.05.2022"
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
            title: "Matrix",
            director: "Lana&Lilly Wachowski",
            productionyear: "1999",
            genre: "Action",
            price: "$3.99",
            duedate: "18.05.2022"
        },

    ];


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