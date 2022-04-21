import Grid from "@mui/material/Grid";
import RentedMovieCard from "./RentedMovieCard";
import Constants from "../utils/Constants";

const RentedMovieCards = () => {

    return (
        <div>
            <Grid container >
                <Grid item xs={6} >
                    <div>
                        <RentedMovieCard />
                        <RentedMovieCard />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <RentedMovieCard />
                        <RentedMovieCard />
                    </div>
                </Grid>
            </Grid>
        </div>
    );

};

export default RentedMovieCards;
