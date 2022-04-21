import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { MockData } from "../MockData";
import { useState } from "react";
import { useStyles } from "../utils/AppStyles.js";
import MovieNavbar from "../components/MovieNavbar";
import MovieCards from "../components/MovieCards";
import Constants from "../utils/Constants";

export default function MainScreen() {

    const [ isLogged, setIsLogged ] = useState( false );
    const classes = useStyles();
    return <div style={ { background: Constants.MOVIEMATE_BACKGROUND, height: "100vh", overflowX: "hidden" } }>
        <MovieNavbar/>

        <Grid> <MovieCards/> </Grid>

    </div>
}
