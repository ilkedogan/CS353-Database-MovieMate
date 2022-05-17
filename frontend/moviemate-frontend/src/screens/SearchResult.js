import React from "react";
import MovieCardMain from "../components/MovieCardMain";
import { Button, CircularProgress, Snackbar } from "@mui/material";
import { Alert } from "@mui/lab";
import Constants from "../utils/Constants";
import AbsentMovieRequest from "../components/AbsentMovieRequest";

export default function SearchResult( props ) {
    const [ error, setError ] = React.useState( "" )
    const [ movies, setMovies ] = React.useState( [] )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetched, setDataFetched ] = React.useState( false )
    const [ absentDialog, setAbsentDialog ] = React.useState( false )

    if ( !dataFetched ) {
        setDataFetched( true )
        setLoading( true )
        searchMovies()
            .then( () => setLoading( false ) )
    }

    async function searchMovies() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = props.searchUrl

        await fetch( url, {
            method: 'POST', headers: headers
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
        <div style={ { justifyContent: "center", display: "flex" } }>
            <Button style={ { color: Constants.MOVIEMATE_RED } } onClick={ () => {
                setAbsentDialog(true)
            } }>
                Absent Movie Request
            </Button>
        </div>
        <div style={ { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 25 } }>
            { loading ? <CircularProgress/> : listItems }
        </div>
        { absentDialog && <AbsentMovieRequest userData={props.userData} onClose={ () => setAbsentDialog( false ) }/> }
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