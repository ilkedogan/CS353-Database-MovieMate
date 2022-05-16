import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import { useStyles } from "../utils/AppStyles.js";

/**
 * İlke Doğan
 * 16.05.2022
 * MovieRecommend
 */

export default function MovieRecommend(props) {

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
                <Avatar
                    sx={{
                        bgcolor: Constants.MOVIEMATE_GREEN,
                        width: "7vh",
                        height: "7vh",
                        alignItems: 'center',
                    }} src="/broken-image.jpg" />
                <LoginRegisterTextField label={"Movie Title"} />
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "7vw", borderRadius: "10px", margin: "2vh", height: "5vh" }} onClick={() => {
                    props.onOpen(false)
                }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Recommend
                    </Typography>
                </Button>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <Avatar
                    sx={{
                        bgcolor: Constants.MOVIEMATE_GREEN,
                        width: "7vh",
                        height: "7vh",
                        alignItems: 'center',
                    }} src="/broken-image.jpg" />
                <LoginRegisterTextField label={"Movie Title"} />
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "7vw", borderRadius: "10px", margin: "2vh", height: "5vh" }} onClick={() => {
                    props.onOpen(false)
                }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Recommend
                    </Typography>
                </Button>
            </Grid>
            <Grid container style={{ display: "flex", justifyContent: "center", width: "60rem" }}>
                <Avatar
                    sx={{
                        bgcolor: Constants.MOVIEMATE_GREEN,
                        width: "7vh",
                        height: "7vh",
                        alignItems: 'center',
                    }} src="/broken-image.jpg" />
                <LoginRegisterTextField label={"Name Surname"} />
                <Button style={{ background: Constants.MOVIEMATE_GREEN, width: "7vw", borderRadius: "10px", margin: "2vh", height: "5vh" }} onClick={() => {
                    props.onOpen(false)
                }}>
                    <Typography style={{ color: Constants.WHITE }}>
                        Recommend
                    </Typography>
                </Button>
            </Grid>
        </Grid>

    </Dialog >
}