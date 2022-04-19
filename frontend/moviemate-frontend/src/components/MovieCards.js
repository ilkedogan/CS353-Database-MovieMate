import Grid from "@mui/material/Grid";
import MovieCardMain from "./movieCardMain";
import Constants from "../utils/Constants";

const MovieCards = () => {

    return (
        <div>
            <Grid container >
                <Grid item xs={6} >
                    <div>
                        <MovieCardMain />
                        <MovieCardMain />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <MovieCardMain />
                        <MovieCardMain />
                    </div>
                </Grid>
            </Grid>
        </div>
    );

};

export default MovieCards;
