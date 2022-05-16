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
import { CloseRounded } from "@mui/icons-material";
import { Alert } from "@mui/lab";
import React from "react";

/**
 * Aslı Dinç
 * 14.04.2022
 * RegisterDialog
 */
export default function RegisterDialog( props ) {
    const [ email, setEmail ] = React.useState( "" )
    const [ password, setPassword ] = React.useState( "" )
    const [ passwordConfirm, setPasswordConfirm ] = React.useState( "" )
    const [ name, setName ] = React.useState( "" )
    const [ surname, setSurname ] = React.useState( "" )
    const [ error, setError ] = React.useState( "" )
    const [ loading, setLoading ] = React.useState( false )

    async function register( email, password, name, surname ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "customer?email=" + email + "&password=" + password + "&name=" + name +
            "&surname=" + surname

        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setError( "Successfully Registered!" )
                    setName("")
                    setSurname("")
                    setPassword("")
                    setPasswordConfirm("")
                    setEmail("")
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }


    return <Dialog open={ props.open } onClose={ () => props.onOpen( false ) } fullWidth maxWidth={ "md" }>
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
                    <Button onClick={ () => {
                        props.onOpen( false )
                    } }>
                        <CloseRounded style={ { color: Constants.MOVIEMATE_RED } }/>
                    </Button>
                </Grid>
                <Grid item xs={ 3 }>

                </Grid>
                <Grid item xs={ 2 }
                      style={ { display: "flex", justifyContent: "center", paddingBottom: 40, fontSize: 30 } }>
                    Register
                </Grid>
                <Grid item xs={ 5 }>

                </Grid>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <LoginRegisterTextField label={ "Email" } value={ email } setValue={ ( val ) => setEmail( val ) }
                                        isPassword={ false }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <LoginRegisterTextField label={ "Password" } value={ password }
                                        setValue={ ( val ) => setPassword( val ) } isPassword={ true }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <LoginRegisterTextField label={ "Confirm Password" } value={ passwordConfirm }
                                        setValue={ ( val ) => setPasswordConfirm( val ) } isPassword={ true }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <LoginRegisterTextField label={ "Name" } value={ name } setValue={ ( val ) => setName( val ) }
                                        isPassword={ false }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center" } }>
                <LoginRegisterTextField label={ "Surname" } value={ surname } setValue={ ( val ) => setSurname( val ) }
                                        isPassword={ false }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                {
                    loading ? <CircularProgress/> :
                        <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "8vw", borderRadius: "10px" } }
                                onClick={ () => {
                                    if ( password.trim() !== passwordConfirm.trim() ) {
                                        setError( "Passwords are not same!" )
                                    } else if ( email.trim().length === 0 || password.trim().length === 0 ||
                                        passwordConfirm.trim().length === 0 || name.trim().length === 0 ||
                                        surname.trim().length === 0 ) {
                                        setError( "Please fill all required fields!" )
                                    } else {
                                        setLoading( true )
                                        register( email, password, name, surname )
                                            .then( () => setLoading( false ) )
                                    }
                                } }>
                            <Typography style={ { color: Constants.WHITE } }>
                                Register
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