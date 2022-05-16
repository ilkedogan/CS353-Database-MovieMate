import { DialogContent, DialogTitle, Grid, Button, TextField, Typography, Snackbar } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import React from 'react'
import { Alert } from "@mui/lab";

/**
 * İlke Doğan
 * 13.04.2022
 * Review Card
 */
export default function Review( props ) {
    const [ loading, setLoading ] = React.useState( false )
    const [ error, setError ] = React.useState( "" )
    const [ review, setReview ] = React.useState( "" )

    async function sendReview( review ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "review?movieId=" + props.movie.id + "&userId=" + props.userData.id +
            "&review=" + review
        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( async data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setError( "Successfully added!" )
                    props.setDataFetch()
                    setReview( "" )

                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    return <Dialog open={ true } onClose={ () => props.onClose(  ) } fullWidth maxWidth={ "md" }>
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
                    Review
                </Grid>

                <Grid item xs={ 2 } style={ {
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 40,
                    fontSize: 30,
                    fontWeight: "bold"
                } }>
                    <Button onClick={ () => {
                        props.onClose( false )
                    } }>
                        Exit
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ review } setValue={ ( val ) => setReview( val ) } multiline rows={ 20 }
                                        label={ "Comments..." }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "20vw", borderRadius: "10px" } }
                        onClick={ () => {
                            if ( review.trim().length > 1 ) {
                                setLoading( true )
                                sendReview( review.trim() )
                                    .then( () => setLoading( false ) )
                            }
                        } }>
                    <Typography style={ { color: Constants.WHITE } }>
                        Send
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