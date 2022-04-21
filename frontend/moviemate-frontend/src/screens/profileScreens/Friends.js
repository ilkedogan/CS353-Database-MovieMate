import { Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import FriendCards from "../../components/FriendCards";
export default function Friends( props ){
    return <Grid container style={{display:"flex", justifyContent:"center", color: Constants.WHITE}}>
            <FriendCards/>
    </Grid>
}