import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import { Button, CircularProgress, Snackbar } from "@mui/material";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import IconButton from '@mui/material/IconButton';
import MovieCardMovieDetailScreen from "../components/MovieCardMovieDetailScreen";
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import StarsCard from "../components/StarsCard";
import CommentCard from "../components/CommentCard";
import { Alert } from "@mui/lab";
import React from "react";
import Review from "../components/Review";

/**
 * Metehan Sacakci
 * 24.04.2022
 * MovieDetailScreen
 */

export default function MovieDetailScreen( props ) {
    const [ movie, setMovie ] = React.useState( {} )
    const [ dataFetch, setDataFetch ] = React.useState( false )
    const [ currentId, setCurrentId ] = React.useState( -1 )
    const [ loading, setLoading ] = React.useState( false )
    const [ error, setError ] = React.useState( "" )
    const [ reviewDialog, setReviewDialog ] = React.useState( false )

    let point = 0

    if ( movie.rates ) {
        movie.rates.forEach( rate => {
            point = point + rate.point
        } )

        if ( movie.rates.length > 0 ) {
            point = point / movie.rates.length
        } else {
            point = 0
        }
    }

    if ( !dataFetch || props.movieId !== currentId ) {
        setDataFetch( true )
        setCurrentId( props.movieId )
        setLoading( true )
        getMovie( props.movieId )
            .then( () => setLoading( false ) )
    }

    async function getMovie( movieId ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "movie?movieId=" + movieId

        await fetch( url, {
            method: 'GET', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    console.log( data.message )
                    setError( data.message )
                } else {
                    setMovie( data )
                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    if ( loading ) {
        return <CircularProgress/>
    }
    if ( error.length > 5 ) {
        return <Grid container sx={ { display: "flex", justifyContent: "center" } }>
            <Button onClick={ () => setDataFetch( false ) }>
                Try Again!
            </Button>
        </Grid>
    }
    return <div style={ { background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" } }>
        <Grid container spacing={ 2 } sx={ {
            bgcolor: Constants.MOVIEMATE_BACKGROUND,
            height: 300,
            width: "100%",
            marginTop: "10px"
        } }>
            <Grid item xs={ 1 } sx={ {} }>
                <IconButton onClick={ () => props.setCurrentPage( 0 ) } style={ { color: Constants.WHITE } }
                            aria-label="arrowBack">
                    <ArrowBackIosOutlinedIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={ 5 } sx={ {
                height: 300,
                width: "100%",
            } }>
                <MovieCardMovieDetailScreen movie={ movie }/>
            </Grid>
            <Grid item xs={ 6 }>
                <Grid item xs={ 12 } sx={ {
                    maxHeight: 130,
                    minHeight:130,
                    width: "100%",
                } }>
                    <p style={ { color: Constants.WHITE, textAlign: 'left' } }>{ movie.description } </p>
                </Grid>
                <Grid container xs={ 12 } sx={ {
                    height: 130,
                    width: "100%"
                } }>
                    <Grid item xs={ 3 } sx={ {
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "center",
                        height: 130,

                    } }>
                        <Grid item
                              sx={ {
                                  color: Constants.MOVIEMATE_RED,
                                  fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                  fontSize: "28px",
                                  textAlign: "right",
                                  fontWeight: 500,
                              } }>
                            { "$" + ( movie.price && movie.price.toFixed( 2 ) ) }
                        </Grid>
                    </Grid>
                    <Grid item xs={ 4 }/>

                    <Grid item xs={ 5 }>
                        <Grid container spacing={ 1 }>
                            <Grid item xs={ 12 }>
                                <Rating name="read-only" style={ { color: Constants.MOVIEMATE_GREEN } } value={ point }
                                        readOnly/>
                            </Grid>
                            <Grid item xs={ 12 }>
                                <Button variant="contained" style={ {
                                    backgroundColor: Constants.MOVIEMATE_GREEN,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "12px",
                                    height: "18px"
                                } }>
                                    Add to WatchList
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 }>
                                <Button variant="contained" style={ {
                                    backgroundColor: Constants.MOVIEMATE_GREEN,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "12px",
                                    height: "18px"
                                } }>
                                    Recommend
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 }>
                                <Button variant="contained" style={ {
                                    backgroundColor: Constants.MOVIEMATE_GREEN,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "12px",
                                    height: "18px"
                                } }>
                                    Add to Cart
                                </Button>
                            </Grid>
                            <Grid item xs={ 12 }>
                                <Button onClick={ () => setReviewDialog( true ) } variant="contained" style={ {
                                    backgroundColor: Constants.MOVIEMATE_GREEN,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "12px",
                                    height: "18px"
                                } }>
                                    Add a Review
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

        <Grid container sx={ {

            height: 230,
            width: "100%",
            marginLeft: "110px",
            marginTop: "20px",
        } }>
            <Grid
                item xs={ 12 }
                sx={ {
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "36px",
                    textAlign: "left",
                    fontWeight: 500,
                    marginLeft: "10px",
                    height: 50,
                } }>
                Stars
                <Divider style={ { backgroundColor: Constants.WHITE, width: "85%" } }/>
            </Grid>
            <Grid container style={ {
                display: "flex",
                marginTop: "10px",
                maxHeight: "150px",
                maxWidth: "100vw",
                overflowX: "hidden",
                flexWrap: "nowrap",
                justifyContent: "start",
                paddingBottom: "10px",
            } }>
                { movie.actors && movie.actors.map( actor => {
                    return <StarsCard name={ actor.name + " " + actor.surname }/>
                } ) }
            </Grid>

        </Grid>

        <Grid container sx={ {
            minheight: 250,
            maxheight: 300,
            width: "100%",
            marginLeft: "110px",
        } }>
            <Grid
                item xs={ 12 }
                sx={ {
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "36px",
                    textAlign: "left",
                    fontWeight: 500,
                    marginLeft: "10px",
                    height: 50,
                } }>
                Reviews
                <Divider style={ { backgroundColor: Constants.WHITE, width: "85%" } }/>
            </Grid>

            <Grid container style={ {
                display: "flex",
                marginTop: "10px",
                maxHeight: "250px",
                maxWidth: "340vw",
                overflowX: "hidden",
                flexWrap: "nowrap",
                justifyContent: "start",
                paddingBottom: "10px",
            } }>
                { movie.reviews && movie.reviews.map( review => {
                    return <CommentCard comment={ review.comment }
                                        customerId={ review.customerId }/>
                } ) }

            </Grid>

        </Grid>
        { reviewDialog && <Review setDataFetch={ () => {
            setDataFetch( false )

        } } onClose={ () => setReviewDialog( false ) } movie={ movie } userData={ props.userData }/> }
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


};
