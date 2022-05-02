import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button } from "@mui/material";

/**
 * Metehan Sacakci
 * 03.05.2022
 * EmployeeCard
 */

const EmployeeCard = () => {

    return (
            <Grid
                container
                sx={{
                    bgcolor: Constants.MOVIEMATE_GREY,
                    height: 100,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "15px",
                }}>
                

                <Grid item xs={3} sx={{
                                    height: 100,
                                    }}>

                    <Grid container xs={12} sx={{
                                    bgcolor: Constants.MOVIEMATE_GREY,
                                    height: 100,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "20px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        Serdar Bağlayan
                    </Grid>

                </Grid>

                <Grid item xs={3} sx={{
                                    height: 100,
                                    
                                    }}>
                    <Grid container xs={12} sx={{
                                    height: 100,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "20px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        Insurance: 4349539
                    </Grid>
                </Grid>

                <Grid item xs={3} sx={{
                                    height: 100,
                                    }}>
                    <Grid container xs={12} sx={{
                                    height: 100,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "20px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 300,
                                    }}>
                        serdar@gmail.com
                    </Grid>
                </Grid>


                <Grid item xs={2} sx={{
                                    height: 100,
                                    }}>
                    <Grid container xs={12} sx={{
                                    height: 100,
                                    color: Constants.WHITE,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "20px",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    }}>
                        <Button variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_RED,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "20px",
                            height: "30px",
                            width: "60%"}}>
                            Remove
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
    );

};

export default EmployeeCard;