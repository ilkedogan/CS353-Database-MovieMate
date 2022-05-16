import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import { useStyles } from "../utils/AppStyles.js";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
/**
 * İlke Doğan
 * 16.05.2022
 * SendFriendRequestDialog
 */

export default function SendFriendRequestDialog(props) {
    function handleClick() {
        console.log("Bastınnnn");
    }

    const classes = useStyles();
    const [tabIndex, setTabIndex] = React.useState(0)
    return <Dialog open={true} onClose={() => props.onOpen(false)} fullWidth maxWidth={"md"}>
        <Grid container style={{ display: "flex", justifyContent: "center", background: Constants.MOVIEMATE_BACKGROUND, color: Constants.WHITE, padding: '40px', paddingTop: '70px', paddingBottom: '70px' }}>
            <Grid container>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={8}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: 40,
                        fontSize: 30
                    }}>
                    Recommend
                </Grid>

                <Grid item xs={2} style={{ display: "flex", justifyContent: "center", paddingBottom: 40, fontSize: 30, fontWeight: "bold" }}>
                    <Button onClick={() => {
                        props.onOpen(false)
                    }}>
                        Exit
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
            <Grid item xs={8} sx={{}}>
                <Avatar
                    sx={{
                        bgcolor: Constants.MOVIEMATE_GREEN,
                        width: "7vh",
                        height: "7vh",
                        alignItems: 'center',
                    }} src="/broken-image.jpg" />
                {props.name}
                </Grid>
                <Grid item xs={2} sx={{}}>
                    <ThumbUpOutlinedIcon onClick={handleClick} aria-label="delete" size="large" color="success">
                        <DeleteIcon fontSize="inherit" sx={{ color: Constants.WHITE }} />
                    </ThumbUpOutlinedIcon>
                </Grid>
                <Grid item xs={2} sx={{ height: "5vh"}}>
                    <ThumbDownAltOutlinedIcon onClick={handleClick} aria-label="delete" size="large" color="success">
                        <DeleteIcon fontSize="inherit" sx={{ color: "fail" }} />
                    </ThumbDownAltOutlinedIcon>
                </Grid>
            </Grid>
        </Grid>

    </Dialog >
}