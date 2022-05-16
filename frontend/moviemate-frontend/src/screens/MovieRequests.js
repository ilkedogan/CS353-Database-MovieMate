import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import { Button } from "@mui/material";
import MovieRequestCard from "../components/MovieRequestCard";
import React from 'react'
import AddMovie from "../components/AddMovie";
import AddDirector from "../components/AddDirector";
import AddActor from "../components/AddActor";
import AddGenre from "../components/AddGenre";


/**
 * Metehan Sacakci
 * 02.05.2022
 * MovieRequests
 */

export default function MovieRequests(props) {

    const [ openDialog, setOpenDialog ] = React.useState("")

    return (
        <div style={{ background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
            <Grid container sx={{
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                width: "100%",
                marginTop: "10px"
            }}>
                <Grid container xs={12} sx={{
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "25px",
                }}>
                    <Grid item xs={4} sx={{ height: 70 }} />
                    <Grid item xs={4} sx={{
                        bgcolor: Constants.MOVIEMATE_BLUE,
                        height: 50,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <Button variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "40%",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "10px",
                            borderRadius: 25,
                            marginTop: "5px",
                        }}>
                            Movie Requests
                        </Button>

                        <Button
                            onClick={ () => props.setCurrentPage( 1 ) }
                            variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_RED,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "40%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                        }}>
                            Deleted Users
                        </Button>

                    </Grid>
                    <Grid item xs={4} sx={{ height: 70 }} />
                </Grid>

                <Grid container xs={12} sx={{
                    height: 50,
                    width: "100%",
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "48px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                    marginTop: "25px",
                }}>
                    Movie Requests
                </Grid>

                <Grid container style={{ maxheight: 600, overflowX: "scroll", marginLeft: "15px", marginRight: "15px" }}>
                    <MovieRequestCard></MovieRequestCard>
                    <MovieRequestCard></MovieRequestCard>
                    <MovieRequestCard></MovieRequestCard>
                    <MovieRequestCard></MovieRequestCard>
                </Grid>

                <Grid container xs={12} sx={{
                    height: 70,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "30px",
                }}>
                    <Grid item xs={2} sx={{ height: 70 }} />
                    <Grid item xs={8} sx={{
                        bgcolor: Constants.MOVIEMATE_BLUE,
                        height: 50,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>

                        <Button 
                            onClick={() => setOpenDialog("addMovie")}
                            variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "10px",
                            borderRadius: 25,
                            marginTop: "5px",
                        }}>
                            Add a Movie
                        </Button>

                        <Button 
                            onClick={() => setOpenDialog("addDirector")}
                            variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                            marginRight: "10px",
                        }}>
                            Add a Director
                        </Button>

                        <Button 
                            onClick={() => setOpenDialog("addStar")}
                            variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                            marginRight: "10px",
                        }}>
                            Add a Star
                        </Button>

                        <Button 
                            onClick={() => setOpenDialog("addGenre")}
                            variant="contained" style={{
                            backgroundColor: Constants.MOVIEMATE_GREEN,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontSize: "18px",
                            height: 40,
                            width: "20%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                            marginTop: "5px",
                        }}>
                            Add a Genre
                        </Button>

                    </Grid>
                    <Grid item xs={2} sx={{ height: 70 }} />
                </Grid>
            </Grid>

            {openDialog === "addMovie" ? <AddMovie open={true} onClose={() => setOpenDialog("")}/> : 
                openDialog === "addDirector" ? <AddDirector open={true} onClose={() => setOpenDialog("")}/> :
                    openDialog === "addStar" ? <AddActor open={true} onClose={() => setOpenDialog("")}/> :
                        openDialog === "addGenre" ? <AddGenre open={true} onClose={() => setOpenDialog("")}/> : null}

        </div>
    );

};

