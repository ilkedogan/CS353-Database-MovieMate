import { Button, Dialog, Grid, Snackbar, Typography } from "@mui/material";
import Constants from "../utils/Constants";
import LoginRegisterTextField from "./LoginRegisterTextField";
import React from 'react'
import { Alert } from "@mui/lab";

export default function AbsentMovieRequest( props ) {
    const [ movieTitle, setMovieTitle ] = React.useState( "" )
    const [ director, setDirector ] = React.useState( "" )
    const [ loading, setLoading ] = React.useState( false )
    const [ error, setError ] = React.useState( "" )

    async function createRequest( movieTitle, director ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "absentMovie?title=" + movieTitle + "&director=" + director +
            "&customerId=" + props.userData.id

        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setMovieTitle( "" )
                    setDirector( "" )
                    setError( "Successfully created!" )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    return <Dialog open={ true } onClose={ () => props.onClose() }>
        <Grid container style={ {
            display: "flex",
            justifyContent: "center",
            background: Constants.MOVIEMATE_BACKGROUND,
            color: Constants.WHITE,
            padding: '40px',
            paddingTop: '70px',
            paddingBottom: '70px'
        } }>
            <Grid container>
                <Grid item xs={ 2 }>

                </Grid>
                <Grid item xs={ 8 }
                      style={ {
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: 40,
                          fontSize: 30
                      } }>
                    Movie Request
                </Grid>

                <Grid item xs={ 2 } style={ {
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 40,
                    fontSize: 30,
                    fontWeight: "bold"
                } }>
                    <Button onClick={ () => {
                        props.onClose()
                    } }>
                        Exit
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ movieTitle } setValue={ ( val ) => setMovieTitle( val ) } rows={ 20 }
                                        label={ "Movie title" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ director } setValue={ ( val ) => setDirector( val ) } rows={ 20 }
                                        label={ "Director" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "20vw", borderRadius: "10px" } }
                        onClick={ () => {
                            if ( director.trim().length > 0 && movieTitle.trim().length > 0 ) {
                                setLoading( true )
                                createRequest( movieTitle, director )
                                    .then( () => setLoading( false ) )
                            } else {
                                setError( "Please fill the all the fields!" )
                            }
                        } }>
                    <Typography style={ { color: Constants.WHITE } }>
                        Request
                    </Typography>
                </Button>

            </Grid>
        </Grid>
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
    </Dialog>
}