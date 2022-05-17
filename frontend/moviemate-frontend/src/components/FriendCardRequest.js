import Constants from "../utils/Constants";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import axios from "axios";
import React from "react";
import Icon from '@mui/material/Icon';
import { Button, Container } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';


/**
 * Aslı Dinç
 * 17.05.2022
 * FriendCardRequest
 */

const FriendCardRecommend = (props) => {

    function handleClick() {
        console.log("Bastınnnn");
    }


    return (
        <Grid
            container
            sx={{
                bgcolor: Constants.MOVIEMATE_BACKGROUND,
                height: 150,
                paddingLeft: 8,
                paddingRight: 8,

                alignItems: 'center',
                borderRadius: Constants.BORDER_RADIUS,
            }}>


            <Grid
                item xs={3}>
                <Container

                    sx={{

                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: 'center',
                    }}>

                    <Avatar
                        sx={{

                            bgcolor: Constants.MOVIEMATE_GREEN,
                            width: 70,
                            height: 70,
                        }}
                        alt={props.name}
                        src="/broken-image.jpg"
                    />
                </Container>
            </Grid>

            <Grid
                item xs={6}
                sx={{
                    color: Constants.WHITE,
                    fontFamily: Constants.ROKKIT_FONT_FAMILY,
                    fontSize: "20px",
                    textAlign: "left",
                    paddingLeft: 2,
                    fontWeight: 500,
                }}> {props.name} </Grid>


            <Grid item xs={3} sx={{ bgcolor: Constants.MOVIEMATE_BACKGROUND, display: "flex", justifyContent: "flex-end" }}>
                <Grid item xs={6} sx={{}}>
                    <Button onClick={() => {

                    }}>
                        <ThumbUpOutlinedIcon onClick={handleClick} aria-label="delete" size="large" sx={{ color: Constants.WHITE }}>
                        </ThumbUpOutlinedIcon>
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ height: "5vh" }}>
                    <Button onClick={() => {

                    }}>
                        <ThumbDownAltOutlinedIcon onClick={handleClick} aria-label="delete" size="large" sx={{ color: Constants.WHITE }}>
                        </ThumbDownAltOutlinedIcon>
                    </Button>
                </Grid>
            </Grid>

        </Grid>

    );

};

export default FriendCardRecommend;
