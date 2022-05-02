import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import { Button } from "@mui/material";
import MovieRequestCard from "../components/MovieRequestCard";


/**
 * Metehan Sacakci
 * 02.05.2022
 * MovieRequests
 */

const MovieRequests = () => {

    return (
        <div style={{   background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
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
                    <Grid item xs={4} sx={{height: 70}}/>
                    <Grid item xs={4} sx={{bgcolor: Constants.MOVIEMATE_BLUE, 
                        height: 50,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",}}>
                        
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

                        <Button variant="contained" style={{
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
                    <Grid item xs={4} sx={{height: 70}}/>
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

                <Grid container style={ {maxheight: 600, overflowX: "scroll", marginLeft: "15px", marginRight: "15px"} }>
                    <MovieRequestCard></MovieRequestCard>
                    <MovieRequestCard></MovieRequestCard>
                    <MovieRequestCard></MovieRequestCard>
                    <MovieRequestCard></MovieRequestCard>
                </Grid>
                
            </Grid>
        </div>
    );

};

export default MovieRequests;
