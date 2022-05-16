import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";

/**
 * Metehan Sacakci
 * 24.04.2022
 * CommentCard
 */

const CommentCard = ( props ) => {
    return (
        <Grid
            item
            sx={ {
                bgcolor: Constants.MOVIEMATE_BLUE,
                maxHeight: 250,
                minHeight: 20,
                borderRadius: Constants.BORDER_RADIUS,
                width: "25%",
                marginLeft: "30px",

            } }>
            <Grid item sx={ {
                color: Constants.WHITE,
                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                fontSize: "16px",
                textAlign: "left",
                fontWeight: 300,
                margin: "10px",
            } }>
                { props.comment }
            </Grid>
        </Grid>
    );
};

export default CommentCard;