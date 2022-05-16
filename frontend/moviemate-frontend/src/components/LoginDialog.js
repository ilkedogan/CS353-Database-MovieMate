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
import { ClosedCaption, CloseRounded } from "@mui/icons-material";
import React from 'react'
import { Alert } from "@mui/lab";

export default function LoginDialog( props ) {
    const [ userType, setUserType ] = React.useState( "Customer" )
    const [ email, setEmail ] = React.useState( "" )
    const [ password, setPassword ] = React.useState( "" )
    const [ error, setError ] = React.useState( "" )
    const [ loading, setLoading ] = React.useState( false )

    let users = [ "Customer", "Admin", "Employee" ]

    async function login( email, password ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL

        if ( userType === "Customer" ) {
            url = url + "customer" + '?email=' + email
        } else if ( userType === "Admin" ) {
            url = url + "admin" + '?email=' + email
        } else if ( userType === "Employee" ) {
            url = url + "employee" + '?email=' + email
        }

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    if ( data.password === password ) {
                        localStorage.setItem( "userId", data.id )
                        localStorage.setItem( "userEmail", data.email )
                        localStorage.setItem( "userType", userType )

                        props.setUserData( data )
                        props.setLoggedIn( true )
                        props.onOpen( false )
                        props.setLoggedUserType( userType )
                    } else {
                        setError( "Password or email is wrong" )
                    }
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
            padding: 40
        } }>
            <Grid container>
                <Grid item xs={ 2 }>
                    <Button onClick={ () => {
                        props.onOpen( false )
                    } }>
                        <CloseRounded style={ { color: Constants.MOVIEMATE_RED } }/>
                    </Button>
                </Grid>
                <Grid item xs={ 2 }>

                </Grid>
                <Grid item xs={ 4 }
                      style={ { display: "flex", justifyContent: "center", paddingBottom: 40, fontSize: 30 } }>
                    { userType + " Login" }
                </Grid>
                <Grid item xs={ 4 }>

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
                <Typography onClick={ () => {
                } } style={ { cursor: "pointer", color: "#707070" } }>
                    Forget Password
                </Typography>

            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                { loading ? <CircularProgress/> :
                    <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "8vw", borderRadius: "10px" } }
                            onClick={ () => {
                                if ( email.trim().length > 0 && password.trim().length > 4 ) {
                                    setLoading( true )
                                    login( email, password )
                                        .then( () => setLoading( false ) )
                                } else {
                                    setError( "Please fill all required fields!" )
                                }
                            } }>
                        <Typography style={ { color: Constants.WHITE } }>
                            { "Login" }
                        </Typography>
                    </Button> }

            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                { users.map( user => {
                    if ( user !== userType ) {

                        return <Button
                            onClick={ () => setUserType( user ) }
                            style={ {
                                color: Constants.MOVIEMATE_GREY
                            } }>
                            { user }
                        </Button>
                    }

                } ) }
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