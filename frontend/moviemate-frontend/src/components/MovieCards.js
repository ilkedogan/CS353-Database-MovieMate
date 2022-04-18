import Grid from "@mui/material/Grid";
import MovieCard from "../components/MovieCard";

const MovieCards = () => {

    return (
        <div>
            <Grid container direction={"column"} className={classes.bg}>
                <Grid item xs={6} >
                    <div>
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>
                </Grid>
            </Grid>
        </div>
    );

};

export default MovieCards;
