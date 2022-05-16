import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button, Snackbar } from "@mui/material";
import { Alert } from "@mui/lab";

/**
 * Metehan Sacakci
 * 02.05.2022
 * MovieRequestCard
 */

const MovieRequestCard = ( props ) => {
    const [ error, setError ] = React.useState( "" )

    async function handleChangeStatus( status ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "absentMovie/changeStatus?newStatus=" + status + "&id=" + props.id
        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    return (
        <Grid
            container
            sx={ {
                bgcolor: Constants.MOVIEMATE_GREY,
                height: 100,
                borderRadius: Constants.BORDER_RADIUS,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "15px",
            } }>

            <Grid item xs={ 1 }/>

            <Grid item xs={ 2 } sx={ {
                height: 100,
            } }>

                <Grid container xs={ 12 } sx={ {
                    bgcolor: Constants.MOVIEMATE_GREY,
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                } }>
                    { props.title }
                </Grid>

            </Grid>

            <Grid item xs={ 2 } sx={ {
                height: 100,

            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                } }>
                    { props.director }
                </Grid>
            </Grid>

            <Grid item xs={ 2 } sx={ {
                height: 100,
            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                } }>
                    { props.requestDate }
                </Grid>
            </Grid>

            <Grid item xs={ 2 } sx={ {
                height: 100,
            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                } }>
                    { props.status }
                </Grid>
            </Grid>

            <Grid item xs={ 2 } sx={ {
                height: 100,
            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                } }>
                    <Button onClick={ () => {
                        if ( props.status === "active" ) {
                            handleChangeStatus( "done" )
                        } else {
                            handleChangeStatus( "active" )
                        }
                        props.changeStatus()
                    } } variant="contained" style={ {
                        backgroundColor: props.status === "active" ? Constants.MOVIEMATE_GREEN :
                            Constants.MOVIEMATE_BLUE,
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "20px",
                        height: "30px",
                        width: "60%"
                    } }>
                        { props.status === "active" ? "Complete" : "Activate" }
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={ 1 }/>
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
    );

};

export default MovieRequestCard;