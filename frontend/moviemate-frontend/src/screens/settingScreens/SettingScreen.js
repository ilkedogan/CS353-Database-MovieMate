import Grid from "@mui/material/Grid";
import { useState } from "react";
import Constants from "../../utils/Constants";
import { Button } from "@mui/material";
import WatchList from "../Watchlist";

export default function SettingScreen( props ) {

    const [ settingsPage, setSettingsPage ] = useState( 0 )

        const [isLogged, setIsLogged] = useState(false);
        return <div style={{ background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
           {settingsPage === 0 && <Grid container direction={"column"}>
                <Grid item xs={2} style={{ display: "flex", paddingTop: "15vh", fontSize: 30, fontWeight: "bold", paddingLeft: "20vh", paddingBottom: 20 }}>
                    <div>
                        <Button style={{
                            paddingLeft: "2vh",
                            paddingBottom: 20,
                            paddingTop: 20,
                            fontSize: 20, backgroundColor: "red",
                            width: "150vh",
                            background: Constants.MOVIEMATE_GREY,
                            opacity: "0.7",
                            color: Constants.WHITE,
                            font: Constants.ROKKIT_FONT_FAMILY,
                            justifyContent: "left",
                            borderRadius: "12px",
                        }} onClick={() => {
                            props.onOpen(false)
                        }}>
                            Movies Recommended to Me
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={2} style={{ display: "flex", paddingTop: "2vh", paddingBottom: 20, fontSize: 30, fontWeight: "bold", paddingLeft: "20vh" }}>
                    <div>
                        <Button style={{
                            paddingLeft: "2vh",
                            paddingBottom: 20,
                            paddingTop: 20,
                            fontSize: 20,
                            backgroundColor: "red",
                            width: "150vh",
                            background: Constants.MOVIEMATE_GREY,
                            opacity: "0.7",
                            color: Constants.WHITE,
                            font: Constants.ROKKIT_FONT_FAMILY,
                            justifyContent: "left",
                            borderRadius: "12px"
                        }} onClick={() => {
                            setSettingsPage(2)
                        }}>
                            My Watchlist
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={2} style={{ display: "flex", paddingTop: "2vh", paddingBottom: 20, fontSize: 30, fontWeight: "bold", paddingLeft: "20vh" }}>
                    <div>
                        <Button
                            style={{
                                paddingLeft: "2vh",
                                paddingBottom: 20,
                                paddingTop: 20,
                                fontSize: 20,
                                backgroundColor: "red",
                                width: "150vh",
                                background: Constants.MOVIEMATE_GREY,
                                opacity: "0.7", 
                                color: Constants.WHITE,
                                font: Constants.ROKKIT_FONT_FAMILY,
                                justifyContent: "left",
                                borderRadius: "12px",
                            }}
                            onClick={() => {
                                props.onOpen(false)
                            }}>
                            Change Password
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={2} style={{ display: "flex", paddingTop: "2vh", paddingBottom: 20, fontSize: 30, fontWeight: "bold", paddingLeft: "20vh" }}>
                    <div>
                        <Button
                            style={{
                                paddingLeft: "2vh",
                                paddingBottom: 20,
                                paddingTop: 20,
                                fontSize: 20,
                                backgroundColor: "red",
                                width: "150vh",
                                background: Constants.MOVIEMATE_GREY,
                                opacity: "0.7",
                                color: Constants.WHITE,
                                font: Constants.ROKKIT_FONT_FAMILY,
                                justifyContent: "left",
                                borderRadius: "12px",
                            }}
                            onClick={() => {
                                props.onOpen(false)
                            }}>
                            My Wallet
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={2} style={{ display: "flex", paddingTop: "2vh", paddingBottom: 20, fontSize: 30, fontWeight: "bold", paddingLeft: "20vh" }}>
                    <div>
                        <Button
                            style={{
                                paddingLeft: "2vh",
                                paddingBottom: 20,
                                paddingTop: 20,
                                fontSize: 20,
                                backgroundColor: "red",
                                width: "150vh",
                                background: Constants.MOVIEMATE_GREY,
                                opacity: "0.7", 
                                color: Constants.WHITE,
                                font: Constants.ROKKIT_FONT_FAMILY,
                                justifyContent: "left",
                                borderRadius: "12px",
                            }} onClick={() => {
                                props.onOpen(false)
                            }}>
                            My Orders
                        </Button>
                    </div>
                </Grid>
    
            </Grid>
            }




            {settingsPage === 2 && <WatchList goBack={() => setSettingsPage(0)}/>}

        </div>
    }