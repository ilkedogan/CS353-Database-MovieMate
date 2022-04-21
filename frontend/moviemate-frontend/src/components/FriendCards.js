import Grid from "@mui/material/Grid";
import Constants from "../utils/Constants";
import FriendCard from "./FriendCard";

/**
 * Aslı Dinç
 * 21.04.2022
 * MovieCards
 */
const MovieCards = () => {

    return (
        <div>
            <Grid container >
                <Grid item xs={4} >
                    <div>
                        <FriendCard />
                        <FriendCard />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <FriendCard />
                        <FriendCard />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <FriendCard />
                        <FriendCard />
                    </div>
                </Grid>
            </Grid>
        </div>
    );

};

export default MovieCards;