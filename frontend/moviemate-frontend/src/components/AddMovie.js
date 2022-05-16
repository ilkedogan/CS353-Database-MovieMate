import {
    DialogContent,
    DialogTitle,
    Grid,
    Button,
    TextField,
    Typography,
    Snackbar,
    CircularProgress
} from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import React from "react";
import { Alert } from "@mui/lab";

/**
 * İlke Doğan
 * 13.04.2022
 * Add Movie
 */
export default function AddMovie( props ) {
    const [ error, setError ] = React.useState( "" )
    const [ title, setTitle ] = React.useState( "" )
    const [ duration, setDuration ] = React.useState( "" )
    const [ description, setDescription ] = React.useState( "" )
    const [ year, setYear ] = React.useState( "" )
    const [ price, setPrice ] = React.useState( "" )
    const [ image, setImage ] = React.useState( "" )
    const [ loading, setLoading ] = React.useState( "" )

    async function addMovie( title, duration, description, year, price, image ) {
        const headers = {
            "Content-Type": "application/json"
        }

        let url = process.env.REACT_APP_URL + "movie?title=" + title + "&duration=" + duration + "&image=" + image +
            "&productionYear=" + year + "&price=" + price + "&description=" + description + "&employeeId=" +
            props.userData.id

        await fetch( url, {
            method: 'POST', headers: headers
        }, )
            .then( response => response.json() )
            .then( data => {
                if ( data.message ) {
                    setError( data.message )
                } else {
                    setError( "Successfully added!" )
                    setTitle( "" )
                    setDuration( "" )
                    setDescription( "" )
                    setYear( "" )
                    setPrice( "" )
                    setImage( "" )

                }
            } )
            .catch( e => {
                setError( e )
            } )
    }

    return <Dialog open={ true } onClose={ () => props.onClose() } fullWidth maxWidth={ "md" }>
        <Grid container style={ {
            display: "flex",
            justifyContent: "center",
            background: Constants.MOVIEMATE_BACKGROUND,
            color: Constants.WHITE,
            padding: '40px',
            paddingTop: '70px',
            paddingBottom: '70px'
        } }>
            <Grid container>
                <Grid item xs={ 2 }>

                </Grid>
                <Grid item xs={ 8 }
                      style={ {
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: 40,
                          fontSize: 30
                      } }>
                    Add a Movie
                </Grid>

                <Grid item xs={ 2 } style={ {
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: 40,
                    fontSize: 30,
                    fontWeight: "bold"
                } }>
                    <Button onClick={ () => {
                        props.onClose()
                    } }>
                        Exit
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ title } setValue={ ( val ) => setTitle( val ) } label={ "Title" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ year } setValue={ ( val ) => setYear( val ) } label={ "Year" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ duration } setValue={ ( val ) => setDuration( val ) }
                                        label={ "Duration" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ price } setValue={ ( val ) => setPrice( val ) } label={ "Price" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ image } setValue={ ( val ) => setImage( val ) } label={ "Image" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem", height: "15vh" } }>
                <LoginRegisterTextField value={ description } setValue={ ( val ) => setDescription( val ) }
                                        label={ "Description" }/>
            </Grid>

            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                {
                    loading ? <CircularProgress/> :
                        <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" } }
                                onClick={ () => {
                                    if ( title.trim().length > 0 && description.trim().length > 0 &&
                                        duration.trim().length > 0 && year.trim().length > 0 && price.trim().length >
                                        0 && image.trim().length > 0 ) {
                                        setLoading( true )
                                        addMovie( title, duration, description, year, price, image )
                                            .then( () => setLoading( false ) )
                                    } else {
                                        setError( "Please fill all gaps!" )
                                    }

                                } }>
                            <Typography style={ { color: Constants.WHITE } }>
                                Add
                            </Typography>
                        </Button>
                }

            </Grid>
        </Grid>

        <Snackbar open={ error.length > 2 }
                  autoHideDuration={ 2000 }
                  onClose={ () => setError( "" ) }
        >
            <Alert onClose={ () => setError( "" ) }
                   severity={ "error" }
            >
                { error }
            </Alert>
        </Snackbar>
    </Dialog>
}