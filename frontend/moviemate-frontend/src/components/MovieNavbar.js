import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Constants from "../utils/Constants";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import { useState } from "react";
import React from "react";
import { FormControl, InputLabel, Typography } from "@mui/material";

export default function ( props ) {

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
                    <Typography onClick={ () => props.setCurrentPage( 0 ) } style={
                        {
                            alignItems: "center",
                            fontSize: "32px",
                            marginLeft: "10px",
                            paddingTop: "16px",
                            width: "200px",
                            color: Constants.WHITE,
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontWeight: "600"
                        } }>
                        MovieMate</Typography>
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

                    <div onClick={ () => props.openLoginDialog() }>
                        <Typography style={ {
                            fontSize: "28px",
                            color: Constants.WHITE,
                            textDecoration: 'none',
                            cursor: "pointer",
                            fontFamily: Constants.ROKKIT_FONT_FAMILY,
                            fontWeight: "300"
                        } }>
                            Login </Typography>
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
                    <div onClick={ () => props.openRegisterDialog() }>
                        <Typography style={
                            {
                                fontSize: "28px",
                                color: Constants.WHITE,
                                textDecoration: 'none',
                                cursor: "pointer",
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontWeight: "300"
                            } }>
                            Register</Typography>
                    </div>

                </Grid>
            </Grid>
        </div>
    );
}

