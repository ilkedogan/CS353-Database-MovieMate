import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import React from "react";
import { Button, CircularProgress } from "@mui/material";

/**
 * Metehan Sacakci
 * 03.05.2022
 * DeletedUserCard
 */

const DeletedUserCard = ( props ) => {
    const [ loading, setLoading ] = React.useState( false )

    return (
        <Grid
            container
            sx={ {
                bgcolor: Constants.MOVIEMATE_GREY,
                height: 100,
                borderRadius: Constants.BORDER_RADIUS,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "15px",
            } }>

            <Grid item xs={ 1 }/>

            <Grid item xs={ 2 } sx={ {
                height: 100,
            } }>

                <Grid container xs={ 12 } sx={ {
                    bgcolor: Constants.MOVIEMATE_GREY,
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                } }>
                    { props.nameSurname }
                </Grid>

            </Grid>

            <Grid item xs={ 2 }/>

            <Grid item xs={ 2 } sx={ {
                height: 100,
            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 300,
                } }>
                    { props.email }
                </Grid>
            </Grid>

            <Grid item xs={ 2 }/>

            <Grid item xs={ 2 } sx={ {
                height: 100,
            } }>
                <Grid container xs={ 12 } sx={ {
                    height: 100,
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                } }>
                    { loading ? <CircularProgress/> : <Button onClick={ () => {
                        setLoading( true )
                        props.recover()
                             .then( () => {
                                 setLoading( false )
                             } )
                    } } variant="contained" style={ {
                        backgroundColor: Constants.MOVIEMATE_GREEN,
                        fontFamily: Constants.ROKKIT_FONT_FAMILY,
                        fontSize: "20px",
                        height: "30px",
                        width: "60%"
                    } }>
                        Recover
                    </Button> }
                </Grid>
            </Grid>

            <Grid item xs={ 1 }/>

        </Grid>
    );

};

export default DeletedUserCard;