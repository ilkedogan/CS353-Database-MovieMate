import {
    DialogContent,
    DialogTitle,
    Grid,
    Button,
    TextField,
    Typography,
    CircularProgress,
    Snackbar
} from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import React from 'react'
import { Alert } from "@mui/lab";

/**
 * İlke Doğan & Hacı Çakın
 * 13.04.2022
 * Add a Director
 */

export default function AddDirector( props ) {

    const [ name, setName ] = React.useState( "" )
    const [ surname, setSurname ] = React.useState( "" )
    const [ birth, setBirth ] = React.useState( "" )
    const [ loading, setLoading ] = React.useState( "" )
    const [ error, setError ] = React.useState( "" )

    async function addDirector( name, surname, birth ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "director?name=" + name + "&surname=" + surname + "&birth=" + birth

        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setError( "Successfully added!" )
                    setName("")
                    setSurname("")
                    setBirth("")
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
                    Add a Director
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
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ surname } setValue={ ( val ) => setSurname( val ) }
                                        label={ "Surname" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ birth } setValue={ ( val ) => setBirth( val ) } label={ "Birthday(yyyy-mm-dd)" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                { loading ? <CircularProgress/> :
                    <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" } }
                            onClick={ () => {
                                if ( name.trim().length > 0 && surname.trim().length > 0 && birth.trim().length > 0 ) {
                                    setLoading( true )
                                    addDirector( name, surname, birth )
                                        .then( () => setLoading( false ) )
                                } else {
                                    setError( "Please fill all gaps!" )
                                }

                            } }>
                        <Typography style={ { color: Constants.WHITE } }>
                            Add
                        </Typography>
                    </Button> }

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