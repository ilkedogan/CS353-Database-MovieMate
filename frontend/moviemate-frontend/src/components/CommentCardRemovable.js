import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import { Button } from "@mui/material";

/**
 * Metehan Sacakci
 * 03.05.2022
 * CommentCardRemovable
 */

const CommentCardRemovable = () => {
    return (
        <Grid
                item
                sx={{
                    bgcolor: Constants.MOVIEMATE_BLUE,
                    maxHeight: 250,
                    minHeight: 20,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "25%",
                    marginLeft: "30px",
                    
                }}>
                <Grid item sx={{color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "16px",
                    textAlign: "left",
                    fontWeight: 300,
                    marginLeft: "10px",
                    marginRight: "10px",
                    marginTop: "10px",
                    }}>
                    Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment Test Comment 
                </Grid>

                <Grid item sx={{
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        minheight: "30px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}>
                        <Button variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_RED,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: "25px",
                            borderRadius: 10,
                        }}>
                            Remove
                        </Button>
                    </Grid>
        </Grid>
    );
};

export default CommentCardRemovable;