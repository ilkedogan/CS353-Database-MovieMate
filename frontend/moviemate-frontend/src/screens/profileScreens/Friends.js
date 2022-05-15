import { Button, Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import FriendCard from "../../components/FriendCard";

/**
 * Aslı Dinç
 * 09.05.2022
 * Friends
 */
export default function Friends(props) {
    return <Grid container style={{ display: "flex", justifyContent: "center", color: Constants.WHITE }}>
        <Grid container sx={{justifyContent: 'center', paddingTop: 2, paddingBottom: 2}} >
            <Grid item xs={6} sx={{display:'flex', justifyContent: 'flex-end', paddingRight: 2}}>
                <Button variant="contained" style={{
                    backgroundColor: Constants.MOVIEMATE_GREEN,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "12px",
                    height: "32px",
                    
                }}>
                    Add Friend
                </Button>
            </Grid>
            <Grid item xs={6} sx={{display:'flex', justifyContent: 'flex-start', paddingLeft: 2}}>
                <Button variant="contained" style={{
                    backgroundColor: Constants.MOVIEMATE_GREEN,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "12px",
                    height: "32px",
                }}>
                    Friend Requests
                </Button>
            </Grid>


        </Grid>
        <Grid container >
            <Grid item xs={4} >
                <div>
                    <FriendCard />
                    <FriendCard />
                </div>
            </Grid>
            <Grid item xs={4}>
                <div>
                    <FriendCard />
                    <FriendCard />
                </div>
            </Grid>
            <Grid item xs={4}>
                <div>
                    <FriendCard />
                    <FriendCard />
                </div>
            </Grid>
        </Grid>
    </Grid>
}