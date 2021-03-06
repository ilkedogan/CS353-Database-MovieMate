import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import React from "react";

/**
 * Metehan Sacakci
 * 06.03.2022
 * MovieCard 
 */

const MovieDetailCardDetail = () => {

    return (
        <div>

            <Grid
                container
                sx={{
                    height: 300,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "40%",
                    paddingTop: 10,
                    paddingLeft: 10,
                }}>

                <Grid item xs={4} sx={{
                    bgcolor: "transparent",
                    heigth: 300,
                    borderRadius: Constants.BORDER_RADIUS,
                }}>
                  {/* <img
                        src={Spiderman}
                        style={{ width: "100vh", height: "100vh" }}
                    />   */}
                </Grid>

                <Grid
                    item xs={8}
                    sx={{
                        height: 300,
                        borderRadius: Constants.BORDER_RADIUS,
                    }}>

                    <Grid container
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignContent: "center",
                            height: 250,

                        }}>
                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "48px",
                                textAlign: "left",
                                fontWeight: 500,
                            }}>
                            Spider-Man No Way Home
                        </Grid>

                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.MOVIEMATE_GREEN,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "left",
                                fontWeight: 300
                            }}>
                            2021

                        </Grid>
                    </Grid>

                    <Grid container
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignContent: "flex-end",
                            alignItems: "center",
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingBottom: 15,
                        }}>

                        <Grid
                            item xs={6}
                            sx={{
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "left",
                                fontWeight: 300,
                            }}>
                            Action Fantastic
                        </Grid>
                        <Grid
                            item xs={6}
                            sx={{
                                color: Constants.MOVIEMATE_RED,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "36px",
                                textAlign: "right",
                                fontWeight: 500,
                            }}
                        >
                            3.66$
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );

};

export default MovieDetailCardDetail;