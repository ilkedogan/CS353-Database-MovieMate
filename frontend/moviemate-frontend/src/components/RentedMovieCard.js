import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";

/**
 * Aslı Dinç
 * 19.04.2022
 * RentedMovieCard
 */

const RentedMovieCard = ( props ) => {

    Date.prototype.addDays = function ( days ) {
        var date = new Date( this.valueOf() );
        date.setDate( date.getDate() + days );
        return date;
    }


    return (
        <div onClick={ () => {
            props.setCurrentPage( 4 )
            props.setMovieId( props.id )
        } } style={ { display: "flex", justifyContent: "center", cursor: "pointer" } }>
            <Grid
                container
                sx={ {
                    bgcolor: Constants.MOVIEMATE_BLUE,
                    height: 300,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "80%",
                    marginTop: 5,
                    marginLeft: 5,
                } }>

                <Grid item xs={ 4 }>
                    <img src={ props.image }
                         style={ {
                             backgroundSize: "cover",
                             width: "100%",
                             height: 300,
                             borderRadius: "10px",
                         } }
                    />
                </Grid>


                <Grid
                    item xs={ 8 }
                    sx={ {
                        height: 300,
                        borderRadius: Constants.BORDER_RADIUS,
                    } }>


                    <Grid container
                          style={ {
                              display: "flex",
                              flexWrap: "wrap",
                              alignContent: "center",
                              height: 250,
                              paddingBottom: 20,
                              paddingLeft: 15,
                              paddingRight: 15,


                          } }>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "right",
                                fontWeight: 300,

                                marginRight: 3,
                            } }>
                            { "Bought on " + props.rentDate }
                        </Grid>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "16px",
                                textAlign: "right",
                                fontWeight: 300,
                                marginBottom: 6,
                                marginRight: 3,
                            } }>
                            { props.day + " days" }
                        </Grid>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "32px",
                                textAlign: "left",
                                fontWeight: 500,
                            } }>
                            { props.title }
                        </Grid>

                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.MOVIEMATE_GREEN,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "left",
                                fontWeight: 300
                            } }>
                            { props.productionYear }

                        </Grid>
                    </Grid>

                    <Grid container
                          style={ {
                              display: "flex",
                              flexWrap: "wrap",
                              alignContent: "flex-end",
                              alignItems: "center",
                              paddingLeft: 15,
                              paddingRight: 15,
                              paddingBottom: 15,
                          } }>

                        <Grid
                            item xs={ 8 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "left",
                                fontWeight: 300,
                            } }>
                            { "" }
                        </Grid>
                        <Grid
                            item xs={ 4 }
                            sx={ {
                                color: Constants.MOVIEMATE_RED,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "36px",
                                textAlign: "right",
                                fontWeight: 500,
                            } }
                        >

                            { "$" + props.price }
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );

};

export default RentedMovieCard;