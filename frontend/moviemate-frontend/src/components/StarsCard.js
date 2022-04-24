import Grid from "@mui/material/Grid";
import { width } from "@mui/system";
import Constants from "../utils/Constants";

/**
 * Metehan Sacakci
 * 24.04.2022
 * StarsCard
 */

const StarsCard = () => {
    return (
        <div>
            <Grid
                item
                sx={{
                    height: 150,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "8%",
                }}>

                <Grid item sx={{
                    bgcolor: Constants.MOVIEMATE_GREEN,
                    alignContent: "center",
                    height: 100,
                    width: 100,
                    borderRadius: '100%',
                }}>
                </Grid>

                <Grid item sx={{
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "22px",
                    textAlign: "center",
                    fontWeight: 500,
                    alignContent: "center",
                    marginLeft: "10px",
                }}>
                    Andrew Garfield
                </Grid>

            </Grid>
        </div>
    );
};

export default StarsCard;