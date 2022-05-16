import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import { Button, Snackbar } from "@mui/material";
import MovieRequestCard from "../components/MovieRequestCard";
import React from 'react'
import AddMovie from "../components/AddMovie";
import AddDirector from "../components/AddDirector";
import AddActor from "../components/AddActor";
import AddGenre from "../components/AddGenre";
import { Alert } from "@mui/lab";


/**
 * Metehan Sacakci & Aslı Dinç
 * 02.05.2022
 * MovieRequests
 */

export default function MovieRequests( props ) {
    const [ error, setError ] = React.useState( "" )
    const [ openDialog, setOpenDialog ] = React.useState( "" )
    const [ dataFetched, setDataFetched ] = React.useState( false )
    const [ loading, setLoading ] = React.useState( false )
    const [ movieRequests, setMovieRequests ] = React.useState( [] )

    if ( !dataFetched ) {
        setDataFetched( true )
        setLoading( true )
        getMovieRequests( 1 )
            .then( () => setLoading( false ) )
    }

    async function getMovieRequests( page ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "absentMovie?page=" + page
        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setMovieRequests( data )
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

                        <Button variant="contained" style={ {
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
                            onClick={ () => props.setCurrentPage( 1 ) }
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
                    Movie Requests
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
                    { movieRequests.map( m => {
                        return <MovieRequestCard id={ m.id } title={ m.title } director={ m.director }
                                                 status={ m.status } requestDate={ m.requestDate }
                                                 changeStatus={ () => {
                                                     if ( m.status === "active" ) {
                                                         let tempList = []

                                                         movieRequests.forEach( temp => {
                                                             if ( temp.id !== m.id ) {
                                                                 tempList.push( temp )
                                                             } else {
                                                                 temp.status = "done"
                                                                 tempList.push( temp )
                                                             }
                                                         } )

                                                         setMovieRequests( tempList )
                                                     } else {
                                                         let tempList = []

                                                         movieRequests.forEach( temp => {
                                                             if ( temp.id !== m.id ) {
                                                                 tempList.push( temp )
                                                             } else {
                                                                 temp.status = "active"
                                                                 tempList.push( temp )
                                                             }
                                                         } )

                                                         setMovieRequests( tempList )
                                                     }
                                                 } }/>
                    } ) }
                </Grid>

                <Grid container xs={ 12 } sx={ {
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "30px",
                } }>
                    <Grid item xs={ 2 } sx={ { height: 70 } }/>
                    <Grid item xs={ 8 } sx={ {
                        bgcolor: Constants.MOVIEMATE_BLUE,
                        height: 50,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                    } }>

                        <Button
                            onClick={ () => setOpenDialog( "addMovie" ) }
                            variant="contained" style={ {
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "10px",
                            borderRadius: 25,
                            marginTop: "5px",
                        } }>
                            Add a Movie
                        </Button>

                        <Button
                            onClick={ () => setOpenDialog( "addDirector" ) }
                            variant="contained" style={ {
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                            marginRight: "10px",
                        } }>
                            Add a Director
                        </Button>

                        <Button
                            onClick={ () => setOpenDialog( "addStar" ) }
                            variant="contained" style={ {
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                            marginRight: "10px",
                        } }>
                            Add a Star
                        </Button>

                        <Button
                            onClick={ () => setOpenDialog( "addGenre" ) }
                            variant="contained" style={ {
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                        } }>
                            Add a Genre
                        </Button>

                    </Grid>
                    <Grid item xs={ 2 } sx={ { height: 70 } }/>
                </Grid>
            </Grid>

            { openDialog === "addMovie" ?
                <AddMovie userData={ props.userData } open={ true } onClose={ () => setOpenDialog( "" ) }/> :
                openDialog === "addDirector" ?
                    <AddDirector userData={ props.userData } open={ true } onClose={ () => setOpenDialog( "" ) }/> :
                    openDialog === "addStar" ?
                        <AddActor userData={ props.userData } open={ true } onClose={ () => setOpenDialog( "" ) }/> :
                        openDialog === "addGenre" ? <AddGenre userData={ props.userData } open={ true }
                                                              onClose={ () => setOpenDialog( "" ) }/> : null }

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
    );

};

