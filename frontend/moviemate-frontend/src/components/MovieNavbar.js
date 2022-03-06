import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Constants from "../utils/Constants";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@mui/lab";
import TodayIcon from "@mui/icons-material/Today";
import Select from "@mui/material/Select";
import axios from "axios";
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import clsx from "clsx";
import { useState } from "react";
import { connect } from "react-redux";
import React from "react";
import { FormControl, InputLabel } from "@mui/material";
import Logo from "../utils/Logo.png";
import Alert from "@mui/material/Alert";
import { useStyles } from "../utils/AppStyles.js";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { fontWeight } from "@mui/system";

const MovieNavbar = ({
    setCurrentScreen,
}) => {
    const classes = useStyles();
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className={classes.navbar}>
            <Grid container>
                <Grid item xs={3}>
                    <div
                        className={classes.logo}>
                        <a href="/#" style={
                            {
                                marginLeft: "10px",
                                paddingTop: "10px",
                                width: "200px",
                                color: Constants.MOVIEMATE_GREEN,
                                textDecoration: 'none',
                            }}>
                            MovieMate</a>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <FormControl sx={{ m: 1, borderRadius: '10px', width: '24vw', background: Constants.WHITE }} variant="filled" >
                        <InputLabel 
                            style={{
                                color: Constants.MOVIEMATE_NAVBAR_BACKGROUND,
                                fontWeight:"bold",
                            }}>
                            {"Search Movie"}
                        </InputLabel>
                        <FilledInput
                            type={'text'}
                            style={{ color: Constants.MOVIEMATE_NAVBAR_BACKGROUND, paddingLeft: 20, paddingRight: 20 }}
                            endAdornment={
                                <InputAdornment style={{ color: Constants.MOVIEMATE_BLUE }} position="end">
                                    <IconButton edge="end">
                                        {<SearchIcon style={{ color: Constants.MOVIEMATE_BLUE }} />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </Grid>
                <Grid
                    item
                    xs={2}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                </Grid>
                <Grid item xs={3}>
                    <Grid
                        container
                        className={classes.icons}
                        style={{
                            display: "flex",
                            alignItems: "start"
                        }}
                    >
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid
                        container
                        className={classes.icons}
                        style={{
                            display: "flex",
                            alignItems: "start"
                        }}
                    >
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};


export default MovieNavbar;
