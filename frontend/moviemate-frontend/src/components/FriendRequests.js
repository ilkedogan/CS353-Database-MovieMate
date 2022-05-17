import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import { useStyles } from "../utils/AppStyles.js";
import FriendCardRequest from "./FriendCardRequest";

/**
 * İlke Doğan & Aslı Dinç
 * 16.05.2022
 * MovieRecommend
 */

export default function SendFriendRequestDialog(props) {

    const classes = useStyles();

    return <Dialog open={true} onClose={() => props.onClose()} fullWidth maxWidth={"sm"}>
        <Grid container style={{ alignItems: "center", display: "flex", justifyContent: "center", background: Constants.MOVIEMATE_BACKGROUND, color: Constants.WHITE, padding: '40px', paddingTop: '20px', paddingBottom: '70px' }}>
            <Grid xs={1} />
            <Grid xs={10} sx={{ display: "flex", justifyContent: "center" }}>                     
            <Typography style={{
                color: Constants.WHITE, display: "flex", justifyContent: "center", fontFamily: Constants.ROKKIT_FONT_FAMILY,
                fontSize: "32px",
            }}>
                Friend Requests
            </Typography> </Grid>
            <Grid xs={1} >
                <Button onClick={() => {
                    props.onClose()
                }}>
                    Exit
                </Button>
            </Grid>
            <Grid container sx={{display: "flex", justifyContent: "center",}}>
                <FriendCardRequest></FriendCardRequest>
            </Grid>
            <Grid container sx={{display: "flex", justifyContent: "center",}}>
                <FriendCardRequest></FriendCardRequest>
            </Grid>
        </Grid>

    </Dialog >
}