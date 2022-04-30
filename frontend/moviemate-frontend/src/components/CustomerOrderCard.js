import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import React from "react";

/**
 * Metehan Sacakci
 * 30.04.2022
 * CustomerOrderCard 
 */

const CustomerOrderCard = () => {

    return (
            <Grid
                container
                sx={{
                    bgcolor: Constants.MOVIEMATE_GREY,
                    height: 300,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "15px",
                }}>
                
                <Grid item xs={3}/>

                <Grid item xs={2} sx={{
                                    height: 150,
                                    }}>
                    <Grid container xs={12} sx={{
                                    height: 75,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "20px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        Date
                    </Grid>
                    <Grid container xs={12} sx={{
                                    height: 75,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "24px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        10/02/2022
                    </Grid>
                </Grid>

                <Grid item xs={2} sx={{
                                    height: 150,
                                    }}>
                    <Grid container xs={12} sx={{
                                    height: 75,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "20px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        Checkout Type
                    </Grid>
                    <Grid container xs={12} sx={{
                                    height: 75,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "24px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        Wallet 2
                    </Grid>
                </Grid>

                <Grid item xs={2} sx={{
                                    height: 150,
                                    }}>
                    <Grid container xs={12} sx={{
                                    height: 75,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "20px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        Total Amount
                    </Grid>
                    <Grid container xs={12} sx={{
                                    height: 75,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "24px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        300$
                    </Grid>
                </Grid>

                <Grid item xs={3}/>

                <Grid container xs={12} sx={{
                                        height: 150,
                                        color: Constants.WHITE,
                                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                        fontSize: "24px",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: 300,
                                        }}>
                          
                    MOVIE NAMES

                </Grid>

            </Grid>
    );

};

export default CustomerOrderCard;