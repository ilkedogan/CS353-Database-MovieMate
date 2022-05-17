import { DialogContent, DialogTitle, Grid, Button, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import LoginRegisterTextField from "./LoginRegisterTextField";
import Constants from "../utils/Constants";
import React from 'react'

/**
 * İlke Doğan
 * 13.04.2022
 * Advanced Search card
 */
export default function AdvancedSearch( props ) {
    const [ movieTitle, setMovieTitle ] = React.useState( "" )
    const [ director, setDirector ] = React.useState( "" )
    const [ genre, setGenre ] = React.useState( "" )
    const [ actor, setActor ] = React.useState( "" )
    const [ start, setStart ] = React.useState( "2010" )
    const [ end, setEnd ] = React.useState( "2022" )


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
                    Advanced Search
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
                <LoginRegisterTextField value={ movieTitle } setValue={ ( val ) => setMovieTitle( val ) }
                                        label={ "Movie" +
                                        " Title" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ director } setValue={ ( val ) => setDirector( val ) }
                                        label={ "Director" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ actor } setValue={ ( val ) => setActor( val ) } label={ "Star" }/>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "60rem" } }>
                <LoginRegisterTextField value={ genre } setValue={ ( val ) => setGenre( val ) } label={ "Genre" }/>
            </Grid>

            <Grid container style={ { display: "flex", justifyContent: "center", width: "30rem" } }>
                <Grid item xs={ 4 } style={ {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                } }>
                    <LoginRegisterTextField value={ start } setValue={ ( val ) => setStart( val ) } label={ "Year" +
                    " first half" }/>
                </Grid>

                <Grid item xs={ 4 } style={ {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                } }>
                    <Typography style={ { color: Constants.WHITE, fontWeight: "bold" } }>
                        -
                    </Typography>
                </Grid>

                <Grid item xs={ 4 } style={ {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "24px",
                } }>
                    <LoginRegisterTextField value={ end } setValue={ ( val ) => setEnd( val ) } label={ "Year" +
                    " Second half" }/>
                </Grid>
            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", width: "30rem" } }>

            </Grid>
            <Grid container style={ { display: "flex", justifyContent: "center", paddingTop: "40px" } }>
                <Button style={ { background: Constants.MOVIEMATE_GREEN, width: "10vw", borderRadius: "10px" } }
                        onClick={ () => {
                            props.setSearchUrl(
                                process.env.REACT_APP_URL + "searchHistory/detail?keyword=" + movieTitle + "&director=" +
                                director + "&genre=" + genre + "&star=" + actor + "&start=" + start + "&end=" + end )
                            props.setCurrentPage( 5 )
                        } }>
                    <Typography style={ { color: Constants.WHITE } }>
                        Search
                    </Typography>
                </Button>

            </Grid>
        </Grid>

    </Dialog>
}