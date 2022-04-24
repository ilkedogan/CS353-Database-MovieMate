import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import { Margin } from "@mui/icons-material";

/**
 * Metehan Sacakci
 * 24.04.2022
 * MovieCard_MovieDetailScreen
 */

const MovieCard_MovieDetailScreen = () => {

    return (
        <div>
            <Grid
                container
                sx={{
                    height: 280,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "100%",
                }}>

                <Grid item xs={4} sx={{
                    bgcolor: Constants.MOVIEMATE_GREEN,
                    heigth: 280,
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
                        height: 280,
                        borderRadius: Constants.BORDER_RADIUS,
                    }}>

                    <Grid container
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignContent: "center",
                            height: 233,
                            paddingBottom: 20,
                            paddingLeft: 15,
                            paddingRight: 15,

                        }}>
                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "42px",
                                textAlign: "left",
                                fontWeight: 500,
                                marginTop: "50px",
                            }}>
                            Spider-Man No Way Home
                        </Grid>

                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.MOVIEMATE_GREEN,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                                marginTop: "10px",
                            }}>
                            2021

                        </Grid>
                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.MOVIEMATE_GREEN,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                                marginTop: "10px"
                            }}>
                            4/5

                        </Grid>
                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                                marginTop: "20px",
                            }}>
                            Directed By: Jon Watts
                        </Grid>
                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "22px",
                                textAlign: "left",
                                fontWeight: 300,
                            }}>
                            Action Fantastic
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );

};

export default MovieCard_MovieDetailScreen;