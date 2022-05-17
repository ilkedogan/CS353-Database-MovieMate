import {
    DialogContent,
    DialogTitle,
    Grid,
    Button,
    TextField,
    Typography,
    Snackbar,
    CircularProgress
} from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import React from "react";
import { Alert } from "@mui/lab";

/**
 * İlke Doğan & Hacı Çakın
 * 13.04.2022
 * Add Genre
 */
export default function AddGenre( props ) {
    const [ name, setName ] = React.useState( "" )
    const [ loading, setLoading ] = React.useState( "" )
    const [ error, setError ] = React.useState( "" )

    async function addGenre( name ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "genre?name=" + name

        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setError( "Successfully added!" )
                    setName( "" )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    return <Dialog open={ true } onClose={ () => props.onClose() } fullWidth maxWidth={ "md" }>
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
                    Add Genre
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
                <LoginRegisterTextField value={ name } setValue={ ( val ) => setName( val ) } label={ "Name" }/>
            </Grid>

            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "20vh" } }>
                { loading ? <CircularProgress/> :
                    <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" } }
                            onClick={ () => {
                                if ( name.trim().length > 0 ) {
                                    setLoading( true )
                                    addGenre( name )
                                        .then( () => setLoading( false ) )
                                } else {
                                    setError( "Please fill all gaps!" )
                                }

                            } }>
                        <Typography style={ { color: Constants.WHITE } }>
                            Add
                        </Typography>
                    </Button>
                }
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