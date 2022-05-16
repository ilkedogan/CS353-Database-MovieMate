import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import CommentCard from "./CommentCard";
import { ClosedCaption, CloseRounded } from "@mui/icons-material";
import React from 'react'

/**
 * Aslı Dinç
 * 13.04.2022
 * Read Review Dialog
 */
export default function ReadReview(props) {


    return <Dialog open={true} onClose={() => props.onClose()} fullWidth maxWidth={"md"}>
        <Grid container style={{ display: "flex", justifyContent: "center", background: Constants.MOVIEMATE_BACKGROUND, color: Constants.WHITE, padding: '40px', paddingTop: '70px', paddingBottom: '70px' }}>
           <Grid item xs={11}/>
            <Grid item xs={1} sx={{}}>
                <Button onClick={() => {
                    props.onClose()
                }}>
                    <CloseRounded style={{ color: Constants.MOVIEMATE_RED }} />
                </Button>
            </Grid>
            <Grid container style={ {
                display: "flex",
                marginTop: "10px",
                maxHeight: "250px",
                maxWidth: "340vw",
                overflowX: "hidden",
                flexWrap: "nowrap",
                justifyContent: "start",
                paddingBottom: "10px",
            } }>
                {props.openDialog}
            </Grid>
        </Grid>



    </Dialog>
}