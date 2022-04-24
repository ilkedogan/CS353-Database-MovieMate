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
import { FormControl, InputLabel, Typography } from "@mui/material";
import Logo from "../utils/Logo.png";
import Alert from "@mui/material/Alert";
import { useStyles } from "../utils/AppStyles.js";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { fontWeight } from "@mui/system";

export default function MovieNavbarUser( props ) {

    const [ inputText, setInputText ] = useState( "" );

    let inputHandler = ( e ) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setInputText( lowerCase );
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={ 3 } stye={ {
                    alignItems: "center",
                    cursor: "pointer"

                } }>
                    <div onClick={ () => {
                        props.setCurrentPage( 0 )
                    } }>
                        <Typography style={
                            {
                                alignItems: "center",
                                fontSize: "32px",
                                cursor: "pointer",
                                marginLeft: "10px",
                                paddingTop: "16px",
                                width: "200px",
                                color: props.currentPage === 0 ? Constants.MOVIEMATE_GREEN : Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontWeight: "600"
                            } }>
                            MovieMate</Typography>
                    </div>
                </Grid>
                <Grid item xs={ 3 } style={ { alignItems: "center", alignContent: "center" } }>
                    <FormControl sx={ { m: 1, borderRadius: '10px', width: '24vw', background: Constants.WHITE, } }
                                 variant="filled">
                        <InputLabel
                            style={ {
                                color: Constants.MOVIEMATE_NAVBAR_BACKGROUND,
                                fontWeight: "bold",
                            } }>
                            { "Search Movie" }
                        </InputLabel>
                        <FilledInput
                            type={ 'text' }
                            style={ {
                                color: Constants.MOVIEMATE_NAVBAR_BACKGROUND,
                                paddingLeft: 20,
                                paddingRight: 20
                            } }
                            endAdornment={
                                <InputAdornment style={ { color: Constants.MOVIEMATE_BLUE } } position="end">
                                    <IconButton edge="end">
                                        { <SearchIcon style={ { color: Constants.MOVIEMATE_BLUE } }/> }
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </Grid>
                <Grid item xs={ 6 } style={ {
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    paddingRight: "24px",
                } }>

                    <div onClick={ () => {
                        props.setCurrentPage( 1 )

                    } }>
                        <Typography style={ {
                            fontSize: "28px",
                            color: props.currentPage === 1 ? Constants.MOVIEMATE_GREEN : Constants.WHITE,
                            textDecoration: 'none',
                            cursor: "pointer",
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontWeight: "300"
                        } }>
                            Cart </Typography>
                    </div>
                    <div style={
                        {
                            fontSize: "28px",
                            width: "60px",
                            color: Constants.WHITE,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,

                        } }>
                        |
                    </div>
                    <div onClick={ () => {
                        props.setCurrentPage( 2 )
                    } }>
                        <Typography
                            style={ {
                                fontSize: "28px",
                                color: props.currentPage === 2 ? Constants.MOVIEMATE_GREEN : Constants.WHITE,
                                textDecoration: 'none',
                                cursor: "pointer",
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontWeight: "300"
                            } }>
                            Profile </Typography>
                    </div>
                    <div style={
                        {
                            fontSize: "28px",
                            width: "60px",
                            color: Constants.WHITE,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,

                        } }>
                        |
                    </div>
                    <div onClick={ () => {
                        props.setCurrentPage( 3 )

                    } }>
                        <Typography style={ {
                            fontSize: "28px",
                            color: props.currentPage === 3 ? Constants.MOVIEMATE_GREEN : Constants.WHITE,
                            textDecoration: 'none',
                            cursor: "pointer",
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontWeight: "300"
                        } }>
                            Settings </Typography>
                    </div>
                    <div style={
                        {
                            fontSize: "28px",
                            width: "60px",
                            color: Constants.WHITE,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,

                        } }>
                        |
                    </div>
                    <div onClick={ () => {
                        props.logout()
                    } }>
                        <Typography style={ {
                            fontSize: "28px",
                            color: Constants.WHITE,
                            textDecoration: 'none',
                            cursor: "pointer",
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontWeight: "300"
                        } }>
                            Logout </Typography>
                    </div>

                </Grid>
            </Grid>
        </div>
    );
}


