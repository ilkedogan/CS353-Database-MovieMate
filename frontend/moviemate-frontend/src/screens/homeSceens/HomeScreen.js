import MovieCardMain from "../../components/MovieCardMain";
import React from 'react'
import { CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "@mui/lab";

/**
 * Aslı Dinç & Hacı Çakın
 * 13.04.2022
 * HomeScreen
 */
export default function HomeScreen( props ) {
    const [ error, setError ] = React.useState( "" )
    const [ movies, setMovies ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetched, setDataFetched ] = React.useState( false )

    if ( !dataFetched ) {
        setDataFetched( true )
        setLoading( true )
        getMovies( 1 )
            .then( () => setLoading( false ) )
    }

    async function getMovies( page ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "movie/home?page=" + page

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setMovies( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }


    const listItems = movies.map( ( m ) =>
        <MovieCardMain
            setMovieId={ ( val ) => props.setMovieId( val ) }
            openLoginDialog={ () => props.openLoginDialog() } isLogged={ props.isLogged }
            setCurrentPage={ ( val ) => props.setCurrentPage( val ) } id={ m.id } image={ m.image }
            title={ m.title }
            productionYear={ m.productionYear }
            price={ m.price }
            description={ m.description }
            duration={ m.duration }

        /> );


    return <div>
        <div style={ { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 25 } }>
            { loading ? <CircularProgress/> : listItems }
        </div>

        <Snackbar open={ error.length > 2 }
                  autoHideDuration={ 2000 }
                  onClose={ () => setError( "" ) }
        >
            <Alert onClose={ () => setError( "" ) }
                   severity={ "error" }
            >
                { error }
            </Alert>
        </Snackbar>
    </div>
}