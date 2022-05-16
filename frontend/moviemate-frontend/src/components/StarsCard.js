import Grid from "@mui/material/Grid";
import { width } from "@mui/system";
import Constants from "../utils/Constants";

/**
 * Metehan Sacakci
 * 24.04.2022
 * StarsCard
 */

const StarsCard = ( props ) => {
    return ( <Grid container
                sx={ {
                    paddingLeft:2,
                    paddingRight:2,
                    borderRadius: Constants.BORDER_RADIUS,
                    display:"flex",
                    justifyContent:"center",
                    width: "8vw",
                } }>

                <Grid item xs={12} sx={ {
                    bgcolor: Constants.MOVIEMATE_GREEN,
                    alignContent: "center",
                    height: "6vw",
                    width: "6vw",
                    borderRadius: '100%',
                } }>
                </Grid>

                <Grid item xs={12} sx={ {
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "22px",
                    textAlign: "center",
                    fontWeight: 500,
                    alignContent: "center",
                } }>
                    { props.name }
                </Grid>

            </Grid>
    );
};

export default StarsCard;