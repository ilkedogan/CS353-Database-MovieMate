import { Button, Grid } from "@mui/material";
import React from 'react'
import Constants from "../../utils/Constants";
import FriendCard from "../../components/FriendCard";
import MockData from "../../MockData";
import AddFriend from "../../components/AddFriend";

/**
 * Aslı Dinç
 * 09.05.2022
 * Friends
 */
export default function Friends(props) {

    const friends = [
        {
            id: 1,
            name: "Aslı Dinç",
        },
        {
            id: 2,
            name: "Hacı Çakın",
        },
        {
            id: 3,
            name: "İlke Doğan",
        },
        {
            id: 4,
            name: "Abdullah Koç",
        },
        {
            id: 5,
            name: "Furkan Turunç",
        },
        {
            id: 6,
            name: "Arda Serim",
        },
    ]

    const listItems = friends.map((f) => <FriendCard id={f.id} name={f.name}></FriendCard>);

    const [openDialog, setOpenDialog] = React.useState("")

    return <Grid container style={{ display: "flex", justifyContent: "center", color: Constants.WHITE }}>
        <Grid container sx={{ justifyContent: 'center', paddingTop: 2, paddingBottom: 2 }} >
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
                <Button
                    onClick={ () => setOpenDialog( "addFriend" ) }
                    variant="contained" style={{
                        backgroundColor: Constants.MOVIEMATE_GREEN,
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "12px",
                        height: "32px",

                    }}>
                    Add Friend
                </Button>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 2 }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            {listItems}
        </div>
        { openDialog === "addFriend" ? <AddFriend
            userData={ props.userData } open={ true } onClose={ () => setOpenDialog( "" ) }/> : null }
    </Grid>
}