import Grid from "@mui/material/Grid";
import OldMovieCard from "./OldMovieCard";
import Constants from "../utils/Constants";

const OldMovieCards = () => {

    return (
        <div>
            <Grid container >
                <Grid item xs={6} >
                    <div>
                        <OldMovieCard />
                        <OldMovieCard />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <OldMovieCard />
                        <OldMovieCard />
                    </div>
                </Grid>
            </Grid>
        </div>
    );

};

export default OldMovieCards;
