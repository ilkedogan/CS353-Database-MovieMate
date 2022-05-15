import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";

/**
 * Aslı Dinç
 * 19.04.2022
 * OldMovieCard 
 */

const OldMovieCard = (props) => {

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

                <Grid item xs={4} >
                    <img src={props.image}
                        style={{
                            backgroundSize: "cover",
                            width: "100%",
                            height: 300,
                            borderRadius: "10px",
                        }}
                    ></img>
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
                                fontSize: "48px",
                                textAlign: "left",
                                fontWeight: 500,
                            }}>
                            {props.title}
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
                            {props.productionyear}

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
                        }}>

                        <Grid
                            item xs={8}
                            sx={{
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "left",
                                fontWeight: 300,
                            }}>
                            {props.genre}
                        </Grid>
                        <Grid
                            item xs={4}
                            sx={{
                                color: Constants.MOVIEMATE_RED,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "20px",
                                textAlign: "right",
                                fontWeight: 500,
                                paddingRight: 1,
                            }}
                        >
                            {props.expdate}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );

};

export default OldMovieCard;