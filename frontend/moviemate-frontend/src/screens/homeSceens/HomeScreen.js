import Grid from "@mui/material/Grid";
import MovieCardMain from "../../components/MovieCardMain";

export default function HomeScreen( props ){
    return <div>
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
}