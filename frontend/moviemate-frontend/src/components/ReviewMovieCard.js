import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import { Button } from "@mui/material";
import ReadReview from "./ReadReview";

/**
 * Aslı Dinç
 * 28.04.2022
 * ReviewMovieCard
 */

const ReviewMovieCard = ( props ) => {
    const [ openDialog, setOpenDialog ] = React.useState( "" )

    return (
        <div style={ { display: "flex", justifyContent: "center" } }>

            <Grid
                container
                sx={ {
                    bgcolor: Constants.MOVIEMATE_BLUE,
                    height: 300,
                    borderRadius: Constants.BORDER_RADIUS,
                    width: "80%",
                    marginTop: 5,
                    marginLeft: 5,
                } }>

                <Grid item xs={ 4 }>
                    <img onClick={ () => {
                        props.setCurrentPage( 4 )
                        props.setMovieId( props.id )
                    } } src={ props.image }
                         style={ {
                             cursor: "pointer",
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
                                fontSize: "24px",
                                textAlign: "right",
                                fontWeight: 300,
                                marginBottom: 6,
                                marginRight: 3,
                            } }>
                            { "" }
                        </Grid>

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
                        <Grid item xs={ 6 } sx={ { display: 'flex', justifyContent: 'flex-end', paddingRight: 2 } }>
                            <Button
                                onClick={ () => setOpenDialog( props.review ) }
                                variant="contained" style={ {
                                backgroundColor: Constants.MOVIEMATE_GREY,
                                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                                fontSize: "12px",
                                height: "32px",

                            } }>
                                Read Review
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            { openDialog.length > 0 ? <ReadReview
                openDialog={ openDialog }
                userData={ props.userData } open={ true } onClose={ () => setOpenDialog( "" ) }/> : null }
        </div>
    );

};

export default ReviewMovieCard;