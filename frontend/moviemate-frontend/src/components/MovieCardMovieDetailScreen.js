import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import { Margin } from "@mui/icons-material";

/**
 * Metehan Sacakci
 * 24.04.2022
 * MovieCardMovieDetailScreen
 */

const MovieCardMovieDetailScreen = ( props ) => {

    return (
        <div>
            <Grid
                container
                sx={ {
                    height: 280,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "100%",
                } }>

                <Grid item xs={ 4 } sx={ {
                    heigth: 280,
                    padding: 0,
                    margin: 0,
                    borderRadius: Constants.BORDER_RADIUS,
                } }>
                    <img
                        src={ props.movie.image }
                        style={ { width: 240, height: 300, padding: 0, margin: 0,borderRadius:10 } }
                    />
                </Grid>

                <Grid
                    item xs={ 8 }
                    sx={ {
                        height: 280,
                        borderRadius: Constants.BORDER_RADIUS,
                    } }>

                    <Grid container
                          style={ {
                              display: "flex",
                              flexWrap: "wrap",
                              alignContent: "center",
                              height: 233,
                              paddingBottom: 20,
                              paddingLeft: 15,
                              paddingRight: 15,

                          } }>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "42px",
                                textAlign: "left",
                                fontWeight: 500,
                                marginTop: "50px",
                            } }>
                            { props.movie.title }
                        </Grid>

                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.MOVIEMATE_GREEN,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                                marginTop: "10px",
                            } }>
                            { props.movie.productionYear }

                        </Grid>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.MOVIEMATE_GREEN,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                                marginTop: "10px"
                            } }>
                            { }

                        </Grid>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                                marginTop: "20px",
                            } }>
                            { "Directed By: " + props.movie.directors.map( ( d, index ) => {
                                if ( index === props.movie.directors.length - 1 ) {
                                    return d.name + " " + d.surname
                                } else {
                                    return d.name + " " + d.surname + ", "
                                }
                            } ) }
                        </Grid>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                            } }>
                            {  props.movie.genres.map( ( d, index ) => {
                                if ( index === props.movie.genres.length - 1 ) {
                                    return d.name
                                } else {
                                    return d.name + ", "
                                }
                            } )}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );

};

export default MovieCardMovieDetailScreen;