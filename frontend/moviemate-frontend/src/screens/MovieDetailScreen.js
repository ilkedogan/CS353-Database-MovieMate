import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import MovieDetailCardDetail from "../components/MovieDetailCardDetail";
import { Button } from "@mui/material";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import IconButton from '@mui/material/IconButton';
import MovieCard from "../components/MovieCard";
import MovieCard_MovieDetailScreen from "../components/MovieCard_MovieDetailScreen";
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import StarsCard from "../components/StarsCard";
import CommentCard from "../components/CommentCard";

/**
 * Metehan Sacakci
 * 24.04.2022
 * MovieDetailScreen
 */

const MovieDetailScreen = () => {

    return (
        <div style={{   background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" }}>
            <Grid container spacing={2} sx={{
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                height: 300,
                width: "100%",
                marginTop: "10px"
            }}>
                <Grid item xs={1} sx={{
                    }}>
                    <IconButton style={{color: Constants.WHITE}} aria-label="arrowBack">
                        <ArrowBackIosOutlinedIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={5} sx={{
                    height: 300,
                    width: "100%",
                    }}>
                    <MovieCard_MovieDetailScreen></MovieCard_MovieDetailScreen>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12} sx={{
                        maxheight: 130,
                        width: "100%",
                    }}>
                        <p style={{color: Constants.WHITE, textAlign: 'left'}}>Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. </p>
                    </Grid>
                    <Grid container xs={12} sx={{
                        height: 130,
                        width: "100%"
                    }}>
                        <Grid item xs={3} sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignContent: "center",
                            height: 130,
                            
                        }}>
                            <Grid item
                                sx={{
                                    color: Constants.MOVIEMATE_RED,
                                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                    fontSize: "28px",
                                    textAlign: "right",
                                    fontWeight: 500,
                                }}>
                                3.66$
                            </Grid>
                        </Grid>
                        <Grid item xs={4} ></Grid>

                        <Grid item xs={5}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Rating name="read-only" style={{color: Constants.MOVIEMATE_GREEN}} value={3} readOnly />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" style={{
                                        backgroundColor: Constants.MOVIEMATE_GREEN,
                                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                        fontSize: "12px",
                                        height: "18px"}}>
                                        Add to WatchList
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" style={{
                                        backgroundColor: Constants.MOVIEMATE_GREEN,
                                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                        fontSize: "12px",
                                        height: "18px"}}>
                                        Recommend
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" style={{
                                        backgroundColor: Constants.MOVIEMATE_GREEN,
                                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                        fontSize: "12px",
                                        height: "18px"}}>
                                        Add to Cart
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" style={{
                                        backgroundColor: Constants.MOVIEMATE_GREEN,
                                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                        fontSize: "12px",
                                        height: "18px"}}>
                                        Add a Review
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>

            <Grid container sx={{
                
                height: 230,
                width: "100%",
                marginLeft: "110px",
                marginTop: "20px",
            }}>
                <Grid
                    item xs={12}
                    sx={{
                        color: Constants.WHITE,
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "36px",
                        textAlign: "left",
                        fontWeight: 500,
                        marginLeft: "10px",
                        height: 50,
                    }}>
                        Stars
                    <Divider style={{backgroundColor: Constants.WHITE, width: "85%"}} />
                </Grid>
                <Grid container style={ { display: "flex",
                                    marginTop: "10px",
                                    maxHeight: "150px",
                                    maxWidth: "100vw",
                                    overflowX: "hidden",
                                    flexWrap: "nowrap",
                                    justifyContent: "start",
                                    paddingBottom: "10px",
                                        }}>
                    <StarsCard></StarsCard>
                    <StarsCard></StarsCard>
                    <StarsCard></StarsCard>
                    <StarsCard></StarsCard>
                    <StarsCard></StarsCard>
                </Grid>
                
            </Grid>

            <Grid container sx={{
                minheight: 250,
                maxheight: 300,
                width: "100%",
                marginLeft: "110px",
            }}>
                <Grid
                    item xs={12}
                    sx={{
                        color: Constants.WHITE,
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "36px",
                        textAlign: "left",
                        fontWeight: 500,
                        marginLeft: "10px",
                        height: 50,
                    }}>
                        Reviews
                    <Divider style={{backgroundColor: Constants.WHITE, width: "85%"}} />
                </Grid>

                <Grid container style={ { display: "flex",
                                    marginTop: "10px",
                                    maxHeight: "250px",
                                    maxWidth: "340vw",
                                    overflowX: "hidden",
                                    flexWrap: "nowrap",
                                    justifyContent: "start",
                                    paddingBottom: "10px",
                                        }}>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>
                    <CommentCard></CommentCard>
                </Grid>

            </Grid>
        </div>
    );

};

export default MovieDetailScreen;
