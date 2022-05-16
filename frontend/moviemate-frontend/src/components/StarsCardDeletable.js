import Grid from "@mui/material/Grid";
import { width } from "@mui/system";
import Constants from "../utils/Constants";
import { Button } from "@mui/material";

/**
 * Metehan Sacakci
 * 03.05.2022
 * StarsCardDeletable
 */

const StarsCardDeletable = () => {
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
                    marginLeft: "14px",
                }}>
                    Andrew Garfield
                </Grid>

                <Grid item sx={{
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    textAlign: "center",
                    alignContent: "center",
                }}>
                    <Button variant="contained" style={{
                                        backgroundColor: Constants.MOVIEMATE_RED,
                                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                        fontSize: "18px",
                                        height: "25px"}}>
                                        Remove
                    </Button>
                </Grid>

            </Grid>
        </div>
    );
};

export default StarsCardDeletable;