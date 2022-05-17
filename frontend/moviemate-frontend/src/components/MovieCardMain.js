import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

/**
 * Metehan Sacakci & Ilke Dogan & Aslı Dinç
 * 06.03.2022
 * MovieCard For Main
 */

const MovieCardMain = ( props ) => {

    const useStyles = makeStyles( {
        root: {
            width: "80%",
            height: 300,
            filter: "brightness(80%)",
            cursor: "pointer",
            borderRadius: "16px",
            backgroundSize: "600px 260px",
            backgroundRepeat: "no-repeat",
            transition: "transform .4s",
            "&:hover": {
                transform: "scale(1.05)",
                filter: "brightness(100%)",
            },
        },
    } );

    const classes = useStyles();
    const [ visible, setVisible ] = useState( true );
    const handleMovieCardClick = () => {
        if ( props.isLogged ) {
            props.setMovieId( props.id )
            props.setCurrentPage( 4 )
        } else {
            props.openLoginDialog()
        }
    }

    return (
        <div
            className={ classes.root }
            onMouseOver={ () => setVisible( false ) }
            onMouseLeave={ () => setVisible( true ) }
            onClick={ () => handleMovieCardClick() }>
            <Grid
                container
                sx={ {
                    bgcolor: Constants.MOVIEMATE_BLUE,
                    height: 300,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "100%",
                    marginTop: 10,
                    marginLeft: 10,
                } }>

                <Grid item xs={ 4 }>
                    <img src={ props.image }
                         style={ {
                             backgroundSize: "cover",
                             width: "100%",
                             height: 300,
                             borderRadius: "10px",
                         } }
                    />
                </Grid>

                <Grid
                    item xs={ 8 }
                    sx={ {
                        height: 300,
                        borderRadius: Constants.BORDER_RADIUS,
                    } }>

                    <Grid container
                          style={ {
                              display: "flex",
                              flexWrap: "wrap",
                              alignContent: "center",
                              height: 250,
                              paddingBottom: 20,
                              paddingLeft: 15,
                              paddingRight: 15,

                          } }>
                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "48px",
                                textAlign: "left",
                                fontWeight: 500,
                            } }>
                            { props.title }
                        </Grid>

                        <Grid
                            item xs={ 12 }
                            sx={ {
                                color: Constants.MOVIEMATE_GREEN,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "left",
                                fontWeight: 300
                            } }>
                            { props.productionYear }

                        </Grid>
                    </Grid>

                    <Grid container
                          style={ {
                              display: "flex",
                              flexWrap: "wrap",
                              alignContent: "flex-end",
                              alignItems: "center",
                              paddingLeft: 15,
                              paddingRight: 15,
                              paddingBottom: 15,
                          } }>

                        <Grid
                            item xs={ 6 }
                            sx={ {
                                color: Constants.WHITE,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "24px",
                                textAlign: "left",
                                fontWeight: 300,
                            } }>
                            { "" }
                        </Grid>
                        <Grid
                            item xs={ 6 }
                            sx={ {
                                color: Constants.MOVIEMATE_RED,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "36px",
                                textAlign: "right",
                                fontWeight: 500,
                            } }
                        >
                            { "$" + props.price.toFixed( 2 ) }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

};

export default MovieCardMain;