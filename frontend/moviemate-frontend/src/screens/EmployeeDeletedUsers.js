import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import { Button, CircularProgress, Snackbar } from "@mui/material";
import DeletedUserCard from "../components/DeletedUserCard";
import TextField from '@mui/material/TextField';
import React from "react";
import { Alert } from "@mui/lab";


/**
 * Metehan Sacakci
 * 02.05.2022
 * EmployeeDeletedUsers
 */

export default function EmployeeDeletedUsers( props ) {
    const [ error, setError ] = React.useState( "" )
    const [ loading, setLoading ] = React.useState( false )
    const [ dataFetched, setDataFetched ] = React.useState( false )
    const [ deletedUsers, setDeletedUsers ] = React.useState( [] )
    const [ email, setEmail ] = React.useState( "" )
    const [ banLoading, setBanLoading ] = React.useState( false )
    if ( !dataFetched ) {
        setDataFetched( true )
        setLoading( true )
        getDeletedUsers()
            .then( () => setLoading( false ) )
    }

    async function recoverUser( userId ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "banCustomer?customerId=" + userId
        await fetch( url, {
            method: 'DELETE', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setDataFetched( false )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    async function banCustomer( email ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "banCustomer/email?employeeId=" + props.userData.id + "&customerEmail=" +
            email

        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setDataFetched( false )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    async function getDeletedUsers() {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "customer/allBanned"
        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setDeletedUsers( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    return (
        <div style={ { background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" } }>
            <Grid container sx={ {
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                width: "100%",
                marginTop: "10px"
            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "25px",
                } }>
                    <Grid item xs={ 4 } sx={ { height: 70 } }/>
                    <Grid item xs={ 4 } sx={ {
                        bgcolor: Constants.MOVIEMATE_BLUE,
                        height: 50,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                    } }>

                        <Button
                            onClick={ () => props.setCurrentPage( 0 ) }
                            variant="contained" style={ {
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "50%",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "10px",
                            borderRadius: 25,
                            marginTop: "5px",
                        } }>
                            Movie Requests
                        </Button>

                        <Button

                            variant="contained" style={ {
                            backgroundColor: Constants.MOVIEMATE_RED,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "40%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                        } }>
                            Deleted Users
                        </Button>

                    </Grid>
                    <Grid item xs={ 4 } sx={ { height: 70 } }/>
                </Grid>

                <Grid container xs={ 12 } sx={ {
                    height: 50,
                    width: "100%",
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "48px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                    marginTop: "25px",
                } }>
                    <TextField
                        value={ email }
                        onChange={ ( e ) => setEmail( e.target.value ) }
                        id="outlined-basic" label="User Email" variant="outlined" sx={ {
                        bgcolor: Constants.MOVIEMATE_BLUE,
                        height: 50,
                        width: "25%",
                        borderRadius: 5,
                        color: Constants.MOVIEMATE_GREY,
                    } }/>
                </Grid>

                <Grid container xs={ 12 } sx={ {
                    height: 50,
                    width: "100%",
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "48px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                    marginTop: "25px",
                } }>
                    { banLoading ? <CircularProgress/> : <Button onClick={ () => {
                        if ( email.trim().length > 2 ) {
                            setBanLoading( true )
                            banCustomer( email )
                                .then( () => setBanLoading( false ) )
                        } else {
                            setError( "Please fill the fields correctly!" )
                        }
                    } } variant="contained" style={ {
                        backgroundColor: Constants.MOVIEMATE_RED,
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "18px",
                        height: 40,
                        width: "20%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,
                        marginTop: "5px",
                    } }>
                        Delete
                    </Button> }
                </Grid>

                <Grid container xs={ 12 } sx={ {
                    height: 50,
                    width: "100%",
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "48px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                    marginTop: "25px",
                } }>
                    Deleted Users
                </Grid>

                <Grid container
                      style={ {
                          maxheight: 600,
                          overflowX: "scroll",
                          marginLeft: "15px",
                          marginRight: "15px",
                          display: "flex",
                          justifyContent: "center"
                      } }>
                    { loading ? <CircularProgress/> : deletedUsers.map( d => {
                        return <DeletedUserCard
                            recover={ async () => {
                            await recoverUser( d.id )
                        } } id={ d.id } nameSurname={ d.firstName + " " + d.lastName }
                                                email={ d.email }/>
                    } ) }
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
            </Grid>
        </div>
    );

}
;

