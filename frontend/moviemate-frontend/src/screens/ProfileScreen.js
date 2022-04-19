import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { MockData } from "../MockData";
import React, { useState } from "react";
import { useStyles } from "../utils/AppStyles.js";
import MovieNavbar from "../components/MovieNavbar";
import MovieCards from "../components/MovieCard";
import { Container } from "@mui/material";
import Constants from "../utils/Constants";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

export default function ProfileScreen() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const StyledTabs = styled((props) => (
        <Tabs
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    ))({
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
    });

    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(1),
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-selected': {
                color: '#fff',
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
        }),
    );


    return (<div>
        <Grid container direction={"column"} className={classes.bg}>
            <Grid item xs={2}>
                <div>
                    <MovieNavbar />
                </div>
            </Grid>
            <Grid item xs={2} sx={{ paddingTop: 16, alignItems: 'center' }}>
                <Container
                    sx={{
                        bgcolor: Constants.MOVIEMATE_GREEN,
                        width: 150,
                        height: 150,
                        borderRadius: '100%',
                        alignItems: 'center',
                    }}>

                </Container>
            </Grid>

            <Grid item xs={2} sx={{
                color: Constants.WHITE,
                fontFamily: Constants.ROKKIT_FONT_FAMILY,
                fontSize: "32px",
                textAlign: "center",
                paddingTop: 2,
                fontWeight: 500,
            }}> Metehan Saçakçı
            </Grid>

            <Grid item xs={6} sx={{ alignItems: 'center', paddingTop: 1}}>
                <Grid container xs={12} sx={{ alignItems: 'center', paddingTop: 2,  paddingLeft: 10 }}>
                    <Box sx={{ width:'40%', height: 64, bgcolor: Constants.MOVIEMATE_NAVBAR_BACKGROUND, alignItems: 'center', borderRadius: 3 }}>
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            sx={{alignItems: 'center', paddingLeft: 3}}
                        >
                            <StyledTab label="Rented Movies" />
                            <StyledTab label="Old Movies" />
                            <StyledTab label="Ratings" />
                            <StyledTab label="Reviews" />
                            <StyledTab label="Friends" />
                            <StyledTab label="Calender" />
                        </StyledTabs>
                        <Box sx={{ p: 5 }} />
                    </Box>
                    </Grid>
            </Grid>

        </Grid>
    </div >)


}