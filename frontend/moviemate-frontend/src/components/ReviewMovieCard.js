import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import { Button } from "@mui/material";

/**
 * Aslı Dinç
 * 28.04.2022
 * RatingMovieCard 
 */

const RatingMovieCard = () => {

    return (
        <div>

            <Grid
                container
                sx={{
                    bgcolor: Constants.MOVIEMATE_BLUE,
                    height: 300,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "80%",
                    marginTop: 5,
                    marginLeft: 5,
                }}>

                <Grid item xs={4} sx={{
                    bgcolor: Constants.MOVIEMATE_GREEN,
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
                            paddingBottom: 20,
                            paddingLeft: 15,
                            paddingRight: 15,


                        }}>
                        <Grid
                            item xs={12}
                            sx={{
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "right",
                                fontWeight: 300,
                                marginBottom: 6,
                                marginRight: 3,
                            }}>
                            written 27.01.2022
                        </Grid>

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
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
                            <Button variant="contained" style={{
                                backgroundColor: Constants.MOVIEMATE_GREY,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "12px",
                                height: "32px",

                            }}>
                                Read Review
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );

};

export default RatingMovieCard;