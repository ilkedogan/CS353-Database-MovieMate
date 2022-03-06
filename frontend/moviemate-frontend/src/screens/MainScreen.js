import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { MockData } from "../MockData";
import { useState } from "react";
import { useStyles } from "../utils/AppStyles.js";
import MovieNavbar from "../components/MovieNavbar";

export default function MainScreen() {

    const [isLogged, setIsLogged] = useState(false);
    const classes = useStyles();
    return <div>
        <Grid container direction={"column"} className={classes.bg}>
            <Grid item xs={2}>
                <div>
                    <MovieNavbar/>
                </div>
            </Grid>
            <Grid item xs={5}>
                <div>

                </div>
            </Grid>
            <Grid item xs={5} style={{ minHeight: "40vh" }}>
                <div>
                </div>
            </Grid>
        </Grid>
    </div>
}
