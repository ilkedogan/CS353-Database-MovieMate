import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useStyles } from "../../utils/AppStyles.js";
import MovieNavbar from "../../components/MovieNavbar";
import { Container } from "@mui/material";
import Constants from "../../utils/Constants";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import RentedMovies from "./RentedMovies";
import OldMovies from "./OldMovies";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import Friends from "./Friends";
import Calendar from "./Calendar";
import Avatar from '@mui/material/Avatar';

/**
 * Aslı Dinç
 * 09.05.2022
 * ProfileScreen
 */
export default function ProfileScreen( props ) {

    const classes = useStyles();
    const [ tabIndex, setTabIndex ] = React.useState( 0 )

    const StyledTabs = styled( ( props ) => (
        <Tabs
            { ...props }
            TabIndicatorProps={ { children: <span className="MuiTabs-indicatorSpan"/> } }
        />
    ) )( {
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: Constants.MOVIEMATE_GREEN,
        },
    } );

    const StyledTab = styled( ( props ) => <Tab disableRipple { ...props } /> )(
        ( { theme } ) => ( {
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem( 15 ),
            marginRight: theme.spacing( 1 ),
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-selected': {
                color: '#fff',
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
        } ),
    );


    return ( <div>
        <Grid container direction={ "column" }>
            <Grid item xs={ 2 } sx={ { paddingTop: 7, alignItems: 'center' } }>
                <Container
                    sx={ {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    } }>
                    <Avatar
                        sx={ {
                            bgcolor: Constants.MOVIEMATE_GREEN,
                            width: 130,
                            height: 130,
                            alignItems: 'center',
                        } } src="/broken-image.jpg"/>
                </Container>
            </Grid>

            <Grid item xs={ 2 } sx={ {
                color: Constants.WHITE,
                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                fontSize: "32px",
                textAlign: "center",
                paddingTop: 2,
                fontWeight: 500,
            } }> { props.userData.firstName + " " + props.userData.lastName }
            </Grid>

            <Grid item xs={ 6 } sx={ { alignItems: 'center', paddingTop: 2 } }>
                <Grid container xs={ 12 } sx={ { alignItems: 'center', justifyContent: "center", display: "flex" } }>
                    <Box sx={ {
                        width: '60%',
                        height: 64,
                        bgcolor: Constants.MOVIEMATE_NAVBAR_BACKGROUND,
                        justifyContent: "center", display: "flex",
                        alignItems: 'center',
                        borderRadius: 3,
                    } }>
                        <StyledTabs
                            value={ tabIndex }
                            onChange={ ( event, index ) => {
                                setTabIndex( index )
                            } }
                            sx={ { alignItems: 'center', justifyContent: "center", display: "flex", } }
                        >
                            <StyledTab value={ 0 } label={ "Rented Movies" }/>
                            <StyledTab value={ 1 } label={ "Old Movies" }/>
                            <StyledTab value={ 2 } label={ "Ratings" }/>
                            <StyledTab value={ 3 } label={ "Reviews" }/>
                            <StyledTab value={ 4 } label={ "Friends" }/>
                            <StyledTab value={ 5 } label={ "Calendar" }/>
                        </StyledTabs>
                    </Box>
                </Grid>
            </Grid>
            <Grid container style={ {} }>
                {
                    tabIndex === 0 ? <RentedMovies setCurrentPage={ ( val ) => props.setCurrentPage( val ) }
                                                   setMovieId={ ( val ) => props.setMovieId( val ) }
                                                   userData={ props.userData }/> :
                        tabIndex === 1 ? <OldMovies setCurrentPage={ ( val ) => props.setCurrentPage( val ) }
                                                    setMovieId={ ( val ) => props.setMovieId( val ) }
                                                    userData={ props.userData }/> :
                            tabIndex === 2 ? <Ratings setCurrentPage={ ( val ) => props.setCurrentPage( val ) }
                                                      setMovieId={ ( val ) => props.setMovieId( val ) }
                                                      userData={ props.userData }/> :
                                tabIndex === 3 ? <Reviews setCurrentPage={ ( val ) => props.setCurrentPage( val ) }
                                                          setMovieId={ ( val ) => props.setMovieId( val ) }
                                                          userData={ props.userData }/> :
                                    tabIndex === 4 ? <Friends userData={ props.userData }/> :
                                        <Calendar userData={ props.userData }/>
                }
            </Grid>

        </Grid>
    </div> )


}